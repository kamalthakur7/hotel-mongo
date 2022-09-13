const mongoose = require('mongoose');


const dbconnect = (url) => {
    mongoose.connect(url);
    return console.log('db is connected');
}


module.exports = dbconnect;