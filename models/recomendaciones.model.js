const db = require('../util/database');

module.exports = class Recomendacion {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_descripcion, mi_imagen, mi_id) {
        this.nombre = mi_nombre;
        this.descripcion = mi_descripcion ? mi_descripcion : 'Recomendación cool';
        this.img = mi_imagen ? mi_imagen : 'https://img.freepik.com/vector-gratis/personas-que-disfrutan-sus-pasatiempos-sus-lugares_52683-19472.jpg?w=2000';
        this.id = mi_id ? mi_id : 1;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO recomendacion (nombre, descripcion, img) VALUES (?, ?, ?)', 
            [this.nombre, this.descripcion, this.img]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM recomendacion');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM recomendacion WHERE id = ?', [id]);
    }
}