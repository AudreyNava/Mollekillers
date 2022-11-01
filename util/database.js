const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'recomendaciones',
    password: '',
});

module.exports = pool.promise();