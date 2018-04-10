var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    chooseOne();
});

function chooseOne(){
    connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product_name);
        }
        inquirer.prompt([
            {
                type: "input",
                message: "Choose an item",
                name: "item"
            },
            {
                type: "input",
                message: "how many",
                name: "quantity"
            }
        ]).then(function(inquirerResponse){
            var product;
            for(i = 0; i < res.length; i++){
                if(res[i].id == inquirerResponse.item){
                    product = res[i];
                }
            }
            if(product.stock > parseInt(inquirerResponse.quantity)){
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                    {
                        stock: product.stock - parseInt(inquirerResponse.quantity)
                    },
                    {
                        id: product.item
                    }
                    ]
                );
                console.log("\nYou are buying "+ inquirerResponse.quantity + " for "
                            + product.cost+ " each for a total of " + inquirerResponse.quantity * product.cost + " cha-chings");
            }
            else{
                console.log("Not enough products");
            }
            connection.end();
        });
    });
};