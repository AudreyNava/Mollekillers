console.log('Hola mundo');
console.log('xd');

//Para importar express
const express = require('express');
const app = express();

//Utilizar carpeta de rutas
const rutasRecomendaciones = require('./routes/recomendaciones');
const rutasUsuario = require('./routes/usuario');

//usar body parser
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/usuario', rutasUsuario);
app.use('/recomendaciones', rutasRecomendaciones);

app.get('/', (request, response, next) => {
    response.send('bienvenido tus recomendaciones'); //Manda la respuesta
});
app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404);
    response.send('No hay no existe'); //Manda la respuesta
});

app.listen(3000);  