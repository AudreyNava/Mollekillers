const filesystem = require('fs');
const { rawListeners } = require('process');
const Readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Una función que reciba un arreglo de números y devuelva su promedio.

const createArray = (numeroos) => {
    let arr = new Array();
    for(let i = 0; i < numeroos.length; i++){
     
            arr.push(numeroos[i] - 48);
     
    }
    return arr;
}
const promedioArreglo = (arr) => {
    let acum = 0;
    for(let i = 0; i < arr.length; i++){
        acum += arr[i];
    }
    return acum/arr.length;
}

// Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
const CrearArchivo = () => {
    return new Promise((resolve, reject) => {
        Readline.question('Ingresa los numeros a promediar separados por un espacio:', (Numeros) => {filesystem.writeFileSync('Numeros.txt', Numeros); resolve();});
    });
}



const main = async () => {
    await CrearArchivo();

    let numeroos = filesystem.readFileSync('Numeros.txt');
    arr = createArray(numeroos);
    console.log ('El promedio de esos numeros es:' + promedioArreglo(arr) );
}

main();


    const http = require('http');
    const html = filesystem.readFileSync('../Lab7/index.html');
    const server = http.createServer((request, response)=>{
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
        response.end();
    });

server.listen(3000);