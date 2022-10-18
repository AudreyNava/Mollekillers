const { request } = require('http');
const path = require('path');
const Recomendacion = require('../models/recomendaciones.model');

exports.get_new = (request, response, next) => {
    response.render(path.join('recomendaciones','nueva.ejs'));//Manda la respuesta
}

exports.post_new = (request, response, next) => {
    const recomendacion = new Recomendacion(request.body.nombre, request.body.descripcion);
    recomendacion.save(); //Manda la respuesta
}

exports.get_root = (request, response, next) => {
    response.render(path.join('recomendaciones','list.ejs'), {
        recomendaciones: Recomendacion.fetchAll(),
    }); 
};