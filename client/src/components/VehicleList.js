import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';

const VehicleList = (props) => {
    const { removeFromDom, vehicle, setVehicle} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/vehicles")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setVehicle(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
const deleteVehicle = (vehicleId)=>{
    axios.delete('http://localhost:8000/api/vehicles/'+ vehicleId)
    .then(res => {
        removeFromDom(vehicleId)
    })
    .catch(err => console.log(err))
}
return (
    <div>
        {vehicle.map((vehicle, index)=> {
            return(
                <div className='list' key={index} >
            
                    <p><Link className='link' to={`/vehicles/about/${vehicle.vin}`}>{vehicle.name}</Link><button className='ed'><Link className='link' to={`/vehicles/edit/${vehicle.vin}`}>edit</Link></button> <button className='Delete' onClick={(e)=>{deleteVehicle(vehicle._id)}}>X</button>
                </p></div>
            )
        })}

    </div>
)}
                        
                        
export default VehicleList

