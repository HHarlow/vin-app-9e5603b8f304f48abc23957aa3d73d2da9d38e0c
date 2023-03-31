import React,{useState} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom"
import axios from 'axios';
const Vehicle = (props) => {
    const [vin, setVin] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

const submitHandler = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:8000/api/vehicles",{
        vin,
        name
    })
    .then(res => {
        console.log(res);
        console.log(res.data);
        setVin("");
        setName("");
        navigate(`/`);
    })
    
    .catch(err => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);

    });
    
}
    
    return (
        <div className='grid-container'>
        
            <div className='navbar'>
                <a href='/'>Home</a>
                <h1>My Garage</h1>
            </div>
            <div className='middle'>
            <div className='add' >
                <form onSubmit={submitHandler} >
                    {errors.vin ? <p>{errors.vin.message}</p> : null}
                        <p>
                            <label className='vin'>Name for this vehicle:</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>
                            
                            <label className='vin'>vin number:</label>
                            <input type="text" value={vin} onChange={(e) => setVin(e.target.value)} ></input>
                        </p>
                    
                    <button>Submit</button>
                </form>
            </div>
            </div>
        </div>
    )
    }

export default Vehicle