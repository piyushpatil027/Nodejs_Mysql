
var express = require("express");
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_mysql_nodejs'
});

var app = express();

connection.connect(function (err) {
    if (!err)
        console.log("conncetd");
    else
        console.log(err + "There is problem");

});


app.get("/user", function (req, res) {
    connection.query('select * from tbl_user', function (err, rows, fileds) {
        connection.end();
        if (!err) {
            console.log("The solution is row", rows);
        } else {
            console.log(err + "Error while query performing");
        }
    });
});

app.listen(3000);
