require('dotenv').config({path:'.env'})
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});


connection.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado ao banco de dados: ${process.env.MYSQL_DB}`);
});

module.exports = connection;