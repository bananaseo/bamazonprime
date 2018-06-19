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
   
    var query = connection.query("SELECT id, product_name,price FROM products", function(err, res) {
       for (var i = 0; i<res.length; i++) {
         console.log("id "+ res[i].id + ": " + res[i].product_name + " || $" + res[i].price); 
       }
       runSearch(); 
     })
   }

//problem onward...
function runSearch () {
    connection.query("SELECT * FROM products", function(err,results){
        if (err) throw err; 

        inquirer
        .prompt([
            {
                name: "item", 
                type: "input", 
                message: "Enter item id: ", 
                validate: function(value) {
                    if(isNaN(value) === false) {
                        return true; 
                    }
                    return false; 
                }
            },
            {
                name: "unit", 
                type: "input",
                message: "How many would you like?", 

                validate: function(value) {
                    if(isNaN(value) === false) {
                        return true; 
                    }
                    return false; 
                }

            }
        ])
        .then(function(answer) {
              var chosenItem; 
              for (var i=0; i<results.length; i++) {
                  if (results[i].product_name === answer.item) {
                      chosenItem = results[i]; 

                       
                  }
              } 
              
              if (chosenItem.stock_quantity > parseInt(answer.unit)) {
                  connection.query(
                      "UPDATE products SET? WHERE ?", [
                          {
                            stock_quantity: answer.unit  
                          }, 
                          {
                            id: chosenItem.id
                          }
                      ], 
                      function(error) {
                          if (error) throw error; 
                          console.log("purchase successfully made!"); 

                      }
                  )
              }
            }
        )    

    })

    
}

