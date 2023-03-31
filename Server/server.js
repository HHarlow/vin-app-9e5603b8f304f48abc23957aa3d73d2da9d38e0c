const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
    cors({
        
        origin:"http://localhost:3000",
    })
    );
    
require('./routes/routes')(app);
require("./config/config");

app.listen(8000,()=>{
    console.log(`listening at Port 8000`)
})