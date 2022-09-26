console.log('Hola mundo');
console.log('xd');


const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// app.use('/ruta/tacochinos', 

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta /ruta'); //Manda la respuesta
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});



app.listen(3000);  