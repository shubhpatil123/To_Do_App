const mongoose = require('mongoose');

const to_do_Schema = new mongoose.Schema({
    task:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    Due_date:{
        type: Date,
        required:true
    }
});

const To_Do = mongoose.model('TO_DO',to_do_Schema);

module.exports = To_Do;