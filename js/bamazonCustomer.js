MySql.Execute(
    "localhost:3306", 
    "root", 
    "root", 
    "bamazon", 
    "select * from products", 
    function (data) {
        console.log(data)
});


// var connection = mysql.createConnection({

//     host: "localhost",
  
//     // Your port; if not 3306
//     port: 3306,
  
//     // Your username
//     user: "root",
  
//     // Your password
//     password: "root",
//     database: "bamazon"
// });

// connection.connect(function(err) {

//     if (err) throw err;

// });

function appendProduct() {
    var card = '';

    card += '<div class="cardContainer col-lg-4 col-md-4 col-sm-12">\n'
    card += '<div class="card">\n'
    card += '<img src="images/show1.jpg" class="card-img-top" alt="...">\n'
    card += '<div class="card-body">\n'
    card += '<h5 class="card-title">Abracadaver</h5>\n'
    card += '<p class="card-text">Sept. 18th, 2020 | Wharton Center</p>\n'
    card += '<a href="#" class="btn btn-primary">Get Tickets</a>\n'
    card += '</div>\n'
    card += '</div>\n'
    card += '</div>\n'
    console.log(card);
    $(".showsNear").append(card);
}


$(document).ready(function() {
    console.log('HELP!!!')
    appendProduct();
});



// function displayProducts() {

//     connection.query("SELECT * from products", function(err, result) {

//         if (err) throw err;

//         console.log(" ");

//         for (let i = 0; i < result.length; i++) {
//             console.log("---------------------------------------");
//             console.log("Item #: ", result[i].item_id);
//             console.log("Product: ", result[i].product_name);
//             console.log("Department: ", result[i].department_name);
//             console.log("Price: $", result[i].price);
//             console.log("In stock: ", result[i].stock_quantity);
//             console.log("---------------------------------------\n");
//         }
//         selectProduct();
//     });
// }



// function selectProduct() {
//     inquirer.prompt([
//         {
//         type: "input"
//         , name: "itemNumber"
//         , message: "Please enter the item number of the item you'd like to purchase:"
//         },
//         {
//         type: "input"
//         , name: "itemCount"
//         , message: "How many would you like to purchase?"
//         }

//     ]).then(function(selection) {

//         connection.query("SELECT * from products WHERE ?", {item_id: selection.itemNumber}, function(err, result) {
//             if (err) throw err;

//             if (parseInt(selection.itemCount) > result[0].stock_quantity) {

//                 console.log("Insufficient quantity available. There are only " + result[0].stock_quantity + " of that item in stock at this time.");
//                 selectProduct();
//             } else {
//                 connection.query("UPDATE products SET stock_quantity = ? WHERE ?", [(parseInt(result[0].stock_quantity) - parseInt(selection.itemCount)), {item_id: selection.itemNumber}], function(err, res) {
//                     if (err) throw err;
//                     console.log("Rows Affected: " + res.affectedRows);
//                     let totalPrice = result[0].price * parseFloat(selection.itemCount);
//                     console.log("You have purchased " + selection.itemCount + " " + result[0].product_name + " for $" + totalPrice + ".");
//                     connection.end();
//                 });
//             }
//         });
//     });
// }

// displayProducts();

// connection.end();