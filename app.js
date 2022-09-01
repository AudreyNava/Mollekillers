 const filesystem = require('fs');
 filesystem.writeFileSync('hola.txt', 'Hola desde Node');

 console.log("hola desde NodeConsole");

 const arreglo = [500, 60, 90, 60, 80];

 for(let item of arreglo){
     console.log(item);
 }

 for(let item in arreglo){
     setTimeout(() => {
        console.log(item);
     }, 5000);
}

 const http = require('http');

const server = http.createServer((request, responce) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html>');
    response.write("<h1>Hola mundo!</h1>");
    response.end();
 })

 server.listen(3000);