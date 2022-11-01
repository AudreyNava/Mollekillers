const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde Node');



    setTimeout(() => {
        
        console.log("ERROR: SYSTEM FAILURE");
    }, 20000);

console.log("hola desde node");

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

// Printear el arreglo
for (let item of arreglo) {
    console.log(item);
} 

// Printear el lugar del arrego
for (let item in arreglo) {
    console.log(item);
} 

// Printear el arreglo sorteado
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 


const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
//     response.setHeader('Content-Type', 'text/html');
//     response.write("");
//     response.end();
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html>');
    response.write("<h1>Hola mundo!</h1>");
    response.end();
});

server.listen(3000);
 