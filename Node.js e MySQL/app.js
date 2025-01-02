const express = require('express');

const app = express();
const mysql = require('mysql'); 


const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: 'Gabibi89*',
    database: 'projeto'
    });

connection.connect(function(err) {
    if(err) return console.log(err);
    console.log('conectou!');
    });


    
app.get('/', function(req, res) {   
    res.write('Hello World');
    res.end();
    }); 

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
    });