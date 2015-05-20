var models = require('./models'),
    Schema = models.Schema;

var subscriber = Schema({
    nombre  : String,
    email   : String
});

module.exports = models.model('subscriber', subscriber);