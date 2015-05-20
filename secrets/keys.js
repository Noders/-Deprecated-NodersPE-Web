var puerto 		= process.env.PORT || 80;

var horas = 3600000*24;
var uristring = process.env.MONGO || 'mongodb://localhost/backend';
module.exports = {
    puerto: puerto,
    tiempo: horas,
    mongoConnection: uristring
};
