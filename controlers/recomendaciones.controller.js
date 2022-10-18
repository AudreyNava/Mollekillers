
const { request } = require('http');
const path = require('path');

const recomendaciones = ["SingStreet", "StarWars"];

exports.get_new = (request, response, next) => {
    response.render(path.join('recomendaciones','nueva.ejs'));//Manda la respuesta
}

exports.post_new = (request, response, next) => {
    console.log(request.body);
    response.send('Gracias por recomendar: ' + request.body.nombre); //Manda la respuesta
}

exports.get_root = (request, response, next) => {
    response.render(path.join('recomendaciones','list.ejs'), {
        recomendaciones: recomendaciones,
        code_injection: '<%<script>alert("jojojo te hackié")</script>%>',}); 
}