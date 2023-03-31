const mongoose = require("mongoose");

const dbName = "vehicles";

mongoose.connect(`mongodb://localhost/${dbName}`,{
    useNewUrlParser:true,
})
    .then(() => console.log(`Connected to ${dbName} database`))
    .catch((err) =>console.log(err))