var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var subscriber = Schema({
    nombre  : String,
    email   : String
});

module.exports = mongoose.model('subscriber', subscriber);