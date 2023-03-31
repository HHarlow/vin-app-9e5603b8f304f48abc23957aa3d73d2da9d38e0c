import React, {useState, useEffect} from 'react'
import Details from '../components/Details';
import axios from 'axios';

import { useParams, Link } from 'react-router-dom';

const About = (props) => {
    
    const [vehicle, setVehicle] = useState([]);
    const { vin} = useParams();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/vehicles/${vin}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setVehicle(res.data)
        })
        .catch((err) => {
            console.log(err) ;
        })
    },[])
    return (
        <div className='grid-container'>
        <div className='navbar'>
            <a href='/'>Home</a>
            <h1>My Garage</h1>
        </div>
        <div className='middle'>
            <div className='Body'>
        <Details vehicle = {vehicle} setVehicle = {setVehicle} />
            </div>
        </div>
        </div>
    )
}

export default About
