import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link} from "react-router-dom";

const Update = (props) => {
    const { id } = useParams(); 
    const [vin, setVin] = useState("");    
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const [notFoundError, setNotFoundError] = useState("");
    const navigate = useNavigate();
    console.log(id);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/vehicles/${id}`)
            .then(res => {
                console.log(res.data)
                setVin(res.data.vin);
                setName(res.data.name)
            })
            .catch(err => {
                console.log(err.response);
                setNotFoundError('Vehicle not found');
            });
    }, []);

    const updateVehicle = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/vehicles/${id}`,{
            vin,
            name
        })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
        }
    return (
        <div className='grid-container'>
            <div className='navbar'>
                <a href='/vehicles'>Add Vehicle</a>
                <a href='/'>Home</a>
                
                <h1>My Garage</h1>
            </div>
            <div className='middle'>
            <div className='detailPage'>   
            <form onSubmit={updateVehicle}>
                {notFoundError ? (
                    <p>
                        {notFoundError}
                    </p>
                ): null}
                    <p>
                    <label>Edit name:</label>
                        <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
                        <label>Edit Vin:</label>
                        <input value={vin} type="text" onChange={(e) => setVin(e.target.value)} />
                    </p>
                {errors.vin ? <p>{errors.vin.message}</p> : null}
                <button type="submit">Submit Changes</button>
            </form>
            </div>
            </div>
        </div>
    )
}
export default Update;
