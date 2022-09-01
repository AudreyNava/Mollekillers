console.log("hola world");
console.info("Esto es importante");
console.warn("Esto es una advertencia");
console.error("Esto es un error");

//=== compara valor y tipo de dato
console.assert(1 === 1);
console.assert(1 === 0);

// == compara valores 
console.assert(1== "1");

let precio = 59055.2;


//maneta antugua de declarar variables, no se recomienda  por que tiene alcance de funcion

var robot = "Fanuc";
console.log(robot);
for(var i = 0; i<10; i++){
    console.log(i);
}
console.log(i);

//manera nueva de declarar variables, tiene alcance de ámbito {}

let carrera = "ISDR";
console.log(carrera);

for(var j = 0; j<10; j++){
    console.log(j);
}
console.log(j);

console.log(1 + 3 + "4");
console.log("4 "+ 3 + 3);


//alert
alert("hola");

const nombre = prompt("¿Cómo te llamas?");
console.log("hola" + nombre);

const respuesta = confirm("¿tienes sueño?");
if(respuesta){
    console.log("necesitas café");
} else {
    console.log("no necesitas café");
}


//funciones tradicionales
function tomar_cafe(){
    console.log("glu glu glu");
}
tomar_cafe();

function tomar(bebida){
    console.log("tomando" + bebida);
}

//funciones modernas
const comer = () => {
    console.log("Comiento");
}

comer();

const comer_variado = (comida) => {
    console.log("Comiento"+ comida);
}

comer_variado("surimi");

//arreglos

const arreglo = [1, 2, 3, "elemento"];
console.log(arreglo);
arreglo.push("ISDR");
console.log(arreglo);

arreglo[10] = "uno más";
console.log(arreglo);

//arreglos asociativos
arreglo ["ISDR"] = "ingenieria en sistemas digitales y robotica";
console.log(arreglo);

document.write(arreglo);