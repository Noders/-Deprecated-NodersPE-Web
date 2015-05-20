var mongoose = require('mongoose');
var keys = require('../../secrets/keys');

mongoose.connect(keys.mongoConnection, function (err, res) {
    if (err) {
        console.log ('ERROR connecting ' + err);
    } else {
        console.log ('Succeeded connected ');
    }
});

module.exports = mongoose;
