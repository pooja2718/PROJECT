const mongoose = require('mongoose');

const connectMongo = ()=>{
    mongoose.connect("mongodb://localhost:27017/bolcdb").then(() => {
        console.log("connected to database");
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = connectMongo;