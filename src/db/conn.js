
const mongoose = require('mongoose');
const validator =require('validator');
mongoose.connect("mongodb://localhost:27017/Dynamic",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connected');
}).catch((e)=>{
    console.log('NOT CONNECTED');
})