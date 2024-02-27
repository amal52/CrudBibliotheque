//include mysql
var mysql= require('mysql')
//connect with Mysql
var connection = mysql.createConnection({
    host: 'localhost',
    user :'root',
    password:' ',
    database: 'list1',
});
connection.connect(function(err)
{
    if(err) throw err;
    connection.query("CREATE DATABASE list1"),
    function(err, result){
        if (err)  throw err;
        console.log("created successfully !");
    }
})