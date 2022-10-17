const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/nueva_recomendacion', (request, response, next) => {
    response.render(path.join('recomendaciones','nueva.ejs'));//Manda la respuesta
});

router.post('/nueva_recomendacion', (request, response, next) => {
    console.log(request.body);
    response.send('Gracias por recomendar: ' + request.body.nombre); //Manda la respuesta
});

router.get('/audrey', (request, response, next) => {
        response.sendFile(path.join(__dirname, '..', 'previous',  'Lab7', 'index.html'));
    });

module.exports = router;