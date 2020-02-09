const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/To_Do_App');

const db= mongoose.connection;

db.on('error',console.error.bind(console,'error connecting TO_Do'));

db.once('open', function(){
    console.log('Successfully Connected to database');
})