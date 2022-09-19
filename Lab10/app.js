const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);

    const peliculas = [
        {nombre: 'SingStreet', imagen: 'SingStreet.jpg'}, 
        {nombre: 'ElGato', imagen: 'ElGato.jpg'}, 
        {nombre: 'Aristogatos', imagen: 'https://r4.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic2.abc.es%2Fmedia%2Fpeliculas%2F000%2F009%2F442%2Flos-aristogatos-1.jpg&nuevoancho=683&medio=abc'}, 
        {nombre: 'LaBruja', imagen: 'LaBruja.jpg'}];

    if(request.url === '/'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<h1>Mis peliculas favoritas</h1>');

        response.write('<ul>');
        for(let pelicula of peliculas) {
          response.write('<li><a href="/' + pelicula.nombre + '">' + pelicula.nombre + '</a></li>');
        }
        response.write('</ul>');

        response.write('</body></html>');
        response.end();

    }else if (request.url === '/SingStreet'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<h1>'+peliculas[0].nombre+'</h1>');
        response.write('<img alt="Portada de SingStreet" src="'+peliculas[0].imagen+'">');
        response.write('</body></html>');
        response.end();
    }else if (request.url === '/ElGato'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<h1>'+peliculas[1].nombre+'</h1>');
        response.write('<img alt="Portada de El gato" src="'+peliculas[1].imagen+'">');
        response.write('</body></html>');
        response.end();        
    }else if (request.url === '/Aristogatos'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<h1>'+peliculas[2].nombre+'</h1>');
        response.write('<img alt="Portada de los aristogatos" src="'+peliculas[2].imagen+'">');
        response.write('</body></html>');
        response.end();
    }else if (request.url === '/LaBruja'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<h1>'+peliculas[3].nombre+'</h1>');
        response.write('<img alt="Portada de La Bruja" src="'+peliculas[3].imagen+'">');
        response.write('</body></html>');
        response.end();        
    }else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Error 404: El recurso solicitado no existe</h1>");
        response.end();
    }
});

server.listen(3000);