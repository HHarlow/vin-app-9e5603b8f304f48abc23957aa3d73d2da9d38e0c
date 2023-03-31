const VehicleController = require('../controllers/vehicle.controller');


module.exports = (app) =>{
    app.post("/api/vehicles", VehicleController.createVehicle);
    
    app.get('/api/vehicles', VehicleController.getAllVehicles);
    
    app.get('/api/vehicles/:vin', VehicleController.getVehicle);

    app.put('/api/vehicles/:vin', VehicleController.updateVehicle);

    app.delete('/api/vehicles/:id', VehicleController.deleteVehicle);
}
