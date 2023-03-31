const Vehicle = require("../models/vehicle.model");

module.exports = {
    createVehicle: (req, res) => {
        Vehicle.create(req.body)
        .then((newVehicle)=>{
            console.log(newVehicle)
            res.json(newVehicle)})
        .catch((err) =>{
            res.status(400).json({err});
    });
},

getAllVehicles: (req, res) => {
    Vehicle.find({})
        .then(allVehicles => {
            console.log(allVehicles);
            res.json(allVehicles);
        })
        .catch(err => {
            res.status(400).json({err});

        })
},

getVehicle: (req, res) => {
    Vehicle.findOne({vin:req.params.vin})
        .then(Vehicle => res.json(Vehicle))
        .catch(err => {
            res.status(400).json({err});

        })
},

updateVehicle: (req, res) => {
    Vehicle.findOneAndUpdate({vin: req.params.vin},req.body, 
        {new:true,
        runValidators: true,
        })
    .then((updatedVehicle)=>{
        console.log(updatedVehicle)
        res.json(updatedVehicle)})
        .catch(err => {
            res.status(400).json({err});

        })
},

deleteVehicle: (req, res) => {
    Vehicle.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => {
        res.status(400).json({err});
    })
}
}