const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
    
    vin: {
        type: String,
        required:[true, "Field Required"],
        minlength:[12,"Must be 12 characters to lookup vin"]
    },
    name: {
        type: String,
        required:[true, "Field Required"],
        minlength:[0,"Must be at least 1 character"]
    }
    
},
    {timestamps: true} 
);

const Vehicle = mongoose.model("Vehicle", VehicleSchema)

module.exports = Vehicle;