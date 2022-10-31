const mysql = require('mysql2');

const BD = 'LAB'; //LAB o ESCRITORIO

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'recomendaciones',
    password: ''
});

module.exports = pool.promise();