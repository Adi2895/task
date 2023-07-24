const mongoose = require('mongoose');
 async function connect() {
    const getUri = "mongodb://localhost/task";

    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(getUri);
    console.log("Database Connected");
    return db;
}


// const _connect = connect;
module.exports= connect;