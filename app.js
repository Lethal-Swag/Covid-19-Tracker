const express = require('express');
const app = express();
const path = require('path');
const pug = require('pug');
const port = 3000;

//set template
app.set('view engine' , 'pug');
//use directory
app.use('/public',express.static('public'));
//set directory
app.set('views' , path.join(__dirname, 'views'));

app.get( '/' , (req,res)=>{
    res.render('Home.pug');
})
app.listen(port , ()=>{
    console.log(" :: We're at 3000 now :: ");
})

module.exports = app;