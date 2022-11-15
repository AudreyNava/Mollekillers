//Para importar express
const express = require('express');
//usar body parser
const bodyParser = require('body-parser');
//usar paths
const path = require('path');
//usar cookies con cookie parser
const cookieParser = require('cookie-parser');
//usar sesiones
const session = require('express-session');

const app = express();

//configurar ejs
//Configurar el motor de templates como ejs
app.set('view engine', 'ejs');
//Definir la carpeta views como carpeta de vistas para ejs
app.set('views', 'views');

//carpeta public como estática
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
//definir cookieparser
app.use(cookieParser());

//Definir session
app.use(session({
    secret: 'aerfgtvythvyugt54cyh4yhyhy6h46yr5ky87br53tgc3g46gg', //Es la llave con la que se encriptan las 'Claves' de la sesion
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

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