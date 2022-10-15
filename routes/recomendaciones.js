const express = require('express');

const router = express.Router();

router.get('/nueva_recomendacion', (request, response, next) => {
    response.send('<form action="nueva_recomendacion" method="POST"><input type="text" name="nombre"><input type="submit" name="enviar" value="guadar"></form>'); //Manda la respuesta
});

router.post('/nueva_recomendacion', (request, response, next) => {
    console.log(request.body);
    response.send('Gracias por recomendar: ' + request.body.nombre); //Manda la respuesta
});

module.exports = router;