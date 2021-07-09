const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
require('../src/db/conn');
const User = require('./models/usermsg');
const hbs = require('hbs');
const { urlencoded } = require('express');
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));
const viewPath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");
app.set('view engine', 'hbs');
app.set('views', viewPath);
// app.use(express.json()); creating from postman
app.use(urlencoded({extended:false})); // creating data from user through form
hbs.registerPartials(partialPath);

app.get("/",(req,res)=>{
    res.render('index');
})
app.post('/contact',async(req,res)=>{
    try {
        const userData = new User(req.body);
         await userData.save();
         res.status(201).render('index');

        
    } catch (e) {
        res.status(500).send(e);
        
    }

})
app.listen(port,()=>{
    console.log('Listening at port No ',port);
})