import React, {useState} from 'react'
import VehicleList from '../components/VehicleList';
import { Link} from "react-router-dom"

const Home = (props) => {
    const [vehicle, setVehicle] = useState([]);
    const removeFromDom = vehicleId => {
        setVehicle(vehicle.filter(vehicle => vehicle._id !== vehicleId))
    }
    return (
        <div className='grid-container'>
            <div className='navbar'>
                <a href='/vehicles'>Add Vehicle</a>
                <h1>My Garage</h1>
            </div>
            <div className='middle'>
                <div className='Body'>
                    <VehicleList vehicle = {vehicle} setVehicle = {setVehicle} removeFromDom={removeFromDom}/>
                </div>
            </div>
        </div>
    )
}

export default Home