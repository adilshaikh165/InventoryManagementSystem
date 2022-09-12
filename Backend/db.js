
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://adilshaikh165:Percyakr%402161@inotebookreact.pf73plc.mongodb.net/iNoteBook";

const connectToMongo = ()=> {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongoose successfully");
    })
}

module.exports = connectToMongo;