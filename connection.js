var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'red_ant'
  });

  connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
  })
  
module.exports = connection