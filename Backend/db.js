const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true";

const connectToMongo = ()=> {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongoose successfully");
    })
}

module.exports = connectToMongo;