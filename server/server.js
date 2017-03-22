var express = require('express');
var mysql = require('mysql');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database: 'crm_angular'
});

var response = {
  valid : false,
  message : "Une erreur s'est produite",
  data : [],
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type");

    next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

/*******************************Client Queries *******************************/
//Client list
app.get("/clients", function (req, res) {
    console.log("received get on 8888 /clients");
    connection.query('SELECT * FROM client',function(err,rows){
       if(err){
         response.valid = false;
         response.message = "Error while getting client list !";
         response.data = [];
        } else {
          response.valid = true;
          response.message = "Ok";
          response.data = rows;
        }
       res.json(response);
    });
});

//Client by id
app.get("/client/:id", function(req,res){
  console.log("It's Juan")
  var id = req.params.id;
  connection.query('SELECT * FROM client WHERE id = ?',[id],function(err,row){
    if(err || row == ""){
      response.valid = false;
      response.message = "Error while getting client id : " + id;
      response.data = [];
    } else {
      response.valid = true;
      response.message = "Ok";
      response.data = row;
    }
    res.json(response);
  });
});

//Add Client
app.post("/client/add", function(req,res){
  console.log(req.body)
  var input = JSON.parse(JSON.stringify(req.body));

  var data = {name : input.name , firstname : input.firstname , phone : input.phone , mail : input.mail};

  connection.query("INSERT INTO client set ? ",data, function(err, rows){
      if (err || rows == ""){
        response.valid = false;
        response.message = "Error while adding the client ";
        response.data = [];
      } else {
        response.valid = true;
        response.message = "Success adding client ";
        response.data = rows;
      }
      res.json(response);
    });
});

//Edit Client
app.post("/client/edit/:id", function(req,res){
  var input = JSON.parse(JSON.stringify(req.body));
  var id = req.params.id;

  var data = {name : input.name , firstname : input.firstname , phone : input.phone , mail : input.mail};

  connection.query("UPDATE client set ? WHERE id = ?",[data,id], function(err,rows){
    if(err || rows == ""){
      response.valid = false;
      response.message = "Error while editing the client with id = "+ id;
      response.data = [];
    } else {
      response.valid = true;
      response.message = "Success editing client id = "+ id;
      response.data = rows;
    }
    res.json(response);
  });
});

//Delete client
app.get("/client/delete/:id", function(req,res){
  var id = req.params.id;

  connection.query("DELETE FROM client WHERE id = ? ",[id], function(err,rows){
    if(err || rows == ""){
      response.valid = false;
      response.message = "Error while deleting the client with id = "+ id;
      response.data = [];
    } else {
      response.valid = true;
      response.message = "Success deleting client id = "+ id;
      response.data = rows;
    }
    res.json(response)
  });
});

/*****************************************************************************/

/****************************Interaction Queries *****************************/
//Interaction list
app.get("/interactions", function (req, res) {
    connection.query('SELECT * FROM interaction',function(err,rows){
       if(err){
         response.valid = false;
         response.message = "Error while getting interaction list !";
         response.data = [];
        } else {
          response.valid = true;
          response.message = "Ok";
          response.data = rows;
        }
       res.json(response);
    });
});

//Interaction by id
app.get("/interaction/:id", function(req,res){
  var id = req.params.id;
  connection.query('SELECT * FROM interaction WHERE id = ?',[id],function(err,row){
    if(err || row == ""){
      response.valid = false;
      response.message = "Error while getting interaction id : " + id;
      response.data = [];
    } else {
      response.valid = true;
      response.message = "Ok";
      response.data = row;
    }
    res.json(response);
  });
});

//Interaction by user id
app.get("/interaction/user/:id", function(req,res){
  var id = req.params.id;
  connection.query('SELECT * FROM interaction WHERE client_id = ?',[id],function(err,rows){
    if(err || rows == ""){
      response.valid = false;
      response.message = "Error while getting interaction id : " + id;
      response.data = [];
    } else {
      response.valid = true;
      response.message = "Ok";
      response.data = rows;
    }
    res.json(response);
  });
});

//Add Interaction
app.post("/interaction/add", function(req,res){
  var input = JSON.parse(JSON.stringify(req.body));

  var data = {title : input.title , description : input.description , active : input.active , client_id : input.client_id};

  connection.query("INSERT INTO interaction set ? ",data, function(err, rows){
      if (err || rows == ""){
        response.valid = false;
        response.message = "Error while adding the interaction ";
        response.data = [];
      } else {
        response.valid = true;
        response.message = "Success adding interaction ";
        response.data = rows;
      }
      res.json(response);
    });
});

//Edit Interaction
app.post("/interaction/edit/:id", function(req,res){
  var input = JSON.parse(JSON.stringify(req.body));
  var id = req.params.id;

  var data = {title : input.title , description : input.description , active : input.active , client_id : input.client_id};

  connection.query("UPDATE interaction set ? WHERE id = ?",[data,id], function(err,rows){
    if(err || rows == ""){
      response.valid = false;
      response.message = "Error while editing the interaction with id = "+ id;
      response.data = [];
    } else {
      response.valid = true;
      response.message = "Success editing interaction id = "+ id;
      response.data = rows;
    }
    res.json(response);
  });
});

//Delete interaction
app.get("/interaction/delete/:id", function(req,res){
  var id = req.params.id;

  connection.query("DELETE FROM interaction WHERE id = ? ",[id], function(err,rows){
    if(err || rows == ""){
      response.valid = false;
      response.message = "Error while deleting the interaction with id = "+ id;
      response.data = [];
    } else {
      response.valid = true;
      response.message = "Success deleting interaction id = "+ id;
      response.data = rows;
    }
    res.json(response)
  });
});

/*****************************************************************************/

//app.get('/clients', clients.list);//route add customer, get n post

app.listen(8888,'0.0.0.0', function () {
    console.log("listening on port 8888");
});
