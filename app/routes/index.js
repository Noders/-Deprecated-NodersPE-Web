var _           = require('underscore'),
    validator   = require('validator'),
    router      = require('express').Router();
var Sub         = require('../models/subscriber');

router.get('/', function(req, res){
    res.render("index.jade",{
        title: "Noders Perú Comunity"
    });
});

router.post('/submit', function(req, res){
    var response = {
		'formstatus' : 1,
		'message' : 'Ingrese un correo electrónico valido'
	};

	if(req.body.email.length > 0){
		if(validator.isEmail(req.body.email)){
			Sub({
                nombre : req.body.nombre,
				email : req.body.email
			}).
			save(function(err,contact){
				if(err){
					response.message = 'Ocurrio un error';
					res.send(response);
				}else{
					response.formstatus = 0;
					response.message = '¡Gracias por suscribirte! <i class="ion-social-nodejs"></i> <i class="fa fa-heart red"></i> ';
					res.send(response);
				}
			});
		}

	}
});

module.exports = router;