import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Details = () => {
    const { vin } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    const options = {
    method: 'GET',
    url: `https://cis-vin-decoder.p.rapidapi.com/vinDecode?vin=${vin}`,
    headers: {
        'X-RapidAPI-Key': '*****',
    },
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setVehicle(response.data);
            setLoading(false);
        })
        .catch(function (error) {
            console.error(error);
            setLoading(false);
        });
}, [vin]);

return (
    <div className='detailPage'>
        <div className='Body'>
            {loading ? (
            <p>skrrt...</p>
        ) : vehicle ? (
            <>
            <h2>{vehicle.data.ModelYear} {vehicle.data.Series} {vehicle.brandName} {vehicle.modelName} </h2>
            <p>{vehicle.data.Doors} Door {vehicle.data.BodyClass}</p>
            <p>Made in {vehicle.data.PlantCountry}</p>
            <p>{vehicle.data.EngineCylinders} Cylinder</p>
            <p>{vehicle.data.EngineHP} HP</p>
            <p>Fuel type: {vehicle.data.FuelTypePrimary}</p>

            </>
        ) : (
            <p>No vehicle data found</p>
        )}
        </div>
            {vehicle && (
            <Link to={`/vehicles/edit/${vin}`}>
                <button className='edit'>wrong vehicle?</button>
            </Link>
        )}
    </div>
);
};

export default Details;

