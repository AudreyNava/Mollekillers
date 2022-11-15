const { response } = require('express');
const { request } = require('http');
const path = require('path');
const Recomendacion = require('../models/recomendaciones.model');

exports.get_new = (request, response, next) => {
    //response.render(path.join('recomendaciones','nueva.ejs'));//Manda la respuesta
    response.render(path.join('recomendaciones','nueva.ejs'), {
        info: '',
    }); 
}

exports.post_new = (request, response, next) => {
    const recomendacion = new Recomendacion(request.body.nombre, request.body.descripcion, request.body.img);
    console.log(request.body);
    recomendacion.save()//Manda la respuesta
        .then( () => {
            
            request.session.ultimo_recomendacion = recomendacion.nombre;
            request.session.info = "La ultima recomendación " + recomendacion.nombre + "fue creada exitosamente"
            //Manda la cookie en el header
            response.setHeader('Set-Cookie', 'galleta_de_costco=chocolate');
            response.redirect('/recomendaciones/');

            console.log(recomendacion);
        }).catch( (error) => {
            console.log(error);
        });

}

exports.get_root = (request, response, next) => {
    let info = request.session.info ? request.session.info : '';

    request.session.info = '';

    // response.render(path.join('recomendaciones','list.ejs'), {
    //     recomendaciones: Recomendacion.fetchAll(),
    //     ultimo_recomendacion: request.session.ultimo_recomendacion ? request.session.ultimo_recomendacion : '',
    // }); 

    Recomendacion.fetchAll().then(([rows, fieldData]) => {
                response.render(path.join('recomendaciones', 'list.ejs'), {
                    recomendaciones: rows,
                    ultimo_recomendacion: request.session.ultimo_recomendacion ? request.session.ultimo_recomendacion : '',
                    info: info,
                }); 
            }).catch( (error) => {
                console.log(error);
            });
};

exports.get_one = (request, response, next) => {
        
        let info = request.session.info ? request.session.info : '';
    
        request.session.info = '';
    
        Recomendacion.fetchOne(request.params.recomendacion_id)
            .then( ([rows, fieldData]) => {
    
                response.render(path.join('recomendaciones', 'list.ejs'), {
                    recomendacion: rows,
                    ultimo_recomendacion: request.session.ultimo_recomendacion ? request.session.ultimo_recomendacion : '',
                    info: info,
                }); 
    
            }).catch( (error) => {
                console.log(error);
            });
    
};

exports.get_buscar = (request, response, next) => {

    let valor_busqueda = request.params.valor_busqueda ? request.params.valor_busqueda : '';

    Recomendacion.find(valor_busqueda)
        .then( ([rows, fieldData]) => {
            response.status(200).json(rows);
        }).catch( (error) => {
            console.log(error);
        });
}