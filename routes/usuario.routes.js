const express = require('express');
const userController = require('../controlers/usuario.controller');

const router = express.Router();

router.get('/nuevo_usuario', (request, response, next) => {
    response.send('<form action="nuevo_usuario" method="POST"><input type="text" name="nombre"><input type="text" password="contrasena"><input type="submit" name="enviar" value="entrar"></form> '); //Manda la respuesta
});

router.post('/nuevo_usuario', (request, response, next) => {
    console.log(request.body);
    response.send('Gracias por recomendar: ' + request.body.nombre); //Manda la respuesta
});
//router.get('/logout', userController.logout);
module.exports = router;