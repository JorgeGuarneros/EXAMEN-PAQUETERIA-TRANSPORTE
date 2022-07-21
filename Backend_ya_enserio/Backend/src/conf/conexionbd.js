const mysql = require('mysql');
const conecta = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Luiz112098',
    port: '3306',
    database: 'bd_paqueteria'
});

module.exports= conecta;



