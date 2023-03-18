const express = require('express')
const app = express();
const path = require('path');
const hbs = require('hbs');
const mongoose = require('mongoose')
const logger = require('morgan')
const userRouter = require('../src/routes/user')

 
// view engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use('/',userRouter) 

 

// Data Base Connection
mongoose.connect('mongodb://127.0.0.1:27017/myForm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('DB Connection success');
})


app.listen(3000, ()=>{
    console.log('server port 3000');
})



module.exports = app;