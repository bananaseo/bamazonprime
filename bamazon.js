var mysql= require("mysql"); 
var inquirer = require("inquirer"); 

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mew",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
  
    startApp(); 
    
});

function startApp ( ) {
   
    var query = connection.query("SELECT * FROM products", function(err, res) {
       for (var i = 0; i<res.length; i++) {
         console.log(res[i].price); 
       }
     })
   }

