var PasswordDAO = require('../objects/PasswordDAO')

module.exports.getPasswordCont = function(req, res) {
  var username = req.query.username
  PasswordDAO.getUsername(username,function(err, data){
    if(err){
      res.status(500).send('server error');
    }
    else
    {
      var response ={
        'statusCode': 200,
        'message':data
      }
      res.status(200).send(response);
    }
  })
}