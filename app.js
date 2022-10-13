console.log('Hola mundo');
console.log('xd');


const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const router = express.Router();


//body parser
app.use(bodyParser.urlencoded({extended: false}));

app.get('/nueva-recomendacion', (request, response, next) => {
    response.send('<form action="/guardar" method="POST"><input type="text" name="nombre"><input type="submit" name="enviar" value="guardar"></form>');
});

app.use('/guardar', (request, response, next) => {
        console.log(request.body);
        response.send('Gracias por adoptar a ' + request.body.nombre  + 
        '!!!'); 
    });

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta /ruta'); //Manda la respuesta
});


app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});



app.listen(3000);  