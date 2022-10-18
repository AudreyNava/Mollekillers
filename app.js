//Para importar express
const express = require('express');
//usar body parser
const bodyParser = require('body-parser');
//usar paths
const path = require('path');

const app = express();

//configurar ejs
//Configurar el motor de templates como ejs
app.set('view engine', 'ejs');
//Definir la carpeta views como carpeta de vistas para ejs
app.set('views', 'views');

//carpeta public como estática
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Utilizar rutas
const rutasRecomendaciones = require('./routes/recomendaciones.routes');
app.use('/recomendaciones', rutasRecomendaciones);

const rutasUsuario = require('./routes/usuario.routes');
app.use('/usuario', rutasUsuario);

//rutas default
app.get('/', (request, response, next) => {
    response.send('bienvenido tus recomendaciones'); //Manda la respuesta
});
app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404);
    response.sendFile(path.join(__dirname,'views', 'error.html'));; //Manda la respuesta
});

app.listen(3000);  