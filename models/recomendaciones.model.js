const recomendaciones = [{nombre: 'SingStreet', descripcion:'En el Dublín de los años 80, un joven de una familia con problemas entra a una escuela nueva y forma un grupo de rock para intentar encajar y atraer a una chica.', img: 'https://i.scdn.co/image/ab67706c0000bebb807b99d8ceb1e233e1f185fe'}, {nombre: 'StarWars', descripcion: 'es una franquicia y universo compartido de fantasía compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/375px-Star_Wars_Logo.svg.png',}];

module.exports = class Recomendacion {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_descripcion, mi_imagen) {
        this.nombre = mi_nombre;
        this.descripcion = mi_descripcion ? mi_descripcion : 'Recomendación cool';
        this.img = mi_imagen ? mi_imagen : 'https://img.freepik.com/vector-gratis/personas-que-disfrutan-sus-pasatiempos-sus-lugares_52683-19472.jpg?w=2000';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        recomendaciones.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return recomendaciones;
    }

}