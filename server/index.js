const connect = require('./db');
const insertData = require('./FileProcess/process')
const route = require("./routers/router")
const express = require('express'); 
var cors = require('cors')
const app = express(); 
const port = 3000;

app.use(cors());
app.use(express.json());
app.get("/" , (req , res)=>{
    res.send("Hello world"); 
})

app.use('/api',route)


app.listen(port , ()=>{
    console.log(`running successfully on ${port}`); 
})



connect();

// call the function to add the data from the 
// file

const add = async()=>{
    console.log("In process")
    await insertData.insertData();
}

// add()