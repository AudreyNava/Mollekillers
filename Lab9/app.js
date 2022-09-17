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
        if(numeroos[i] != '10'){
            console.log(numeroos[i]);
            arr.push(numeroos[i] - 48)
        }
            
    }
    return arr;
    // const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];
    // let aux = 0;
    // for(let i = 0; i < arreglo.length; i++){

    //     aux += arreglo[i];
    // }
    // return aux/arreglo.length;
}

// Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
const CrearArchivo = () => {
    return new Promise((resolve, reject) => {
        Readline.question('Ingresa los numeros a promediar separados por un espacio:', (Numeros) => {filesystem.writeFileSync('Numeros.txt', Numeros); resolve();});
    });
}

const main = async () => {
    await CrearArchivo();

    let numeroos = filesystem.readFileSync('numeros.txt');
    console.log ('El promedio de esos numeros es:' + createArray() );
}

main();