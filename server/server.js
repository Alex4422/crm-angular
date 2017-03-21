var express = require('express');
var mysql = require('mysql');

var app = express();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database: 'crm_angular'
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

});

app.get("/clients", function (req, res) {
    console.log("received get on 8888 /clients");

    var clients = [
        {nom: "dupont", prenom: "jean", mail: "hh@fhjjdl.com"},
        {nom: "Loli ", prenom: "lol", mail: "loli@lol.com"},
    ];

    res.json(clients);
});

app.listen(8888, function () {
    console.log("listening on port 8888");
});