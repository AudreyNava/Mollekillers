const path = require('path');

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/recomendaciones/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};