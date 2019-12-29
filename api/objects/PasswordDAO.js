var connection = require('../../connection')

module.exports.getUsername = function(username, callback){
    connection.query('select password from authentication where username="'+username+'"', function (error, results, fields) {
        callback(error, results);
    }
    );
}