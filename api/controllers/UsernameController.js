var UsernameDAO = require('../objects/UsernameDAO')

module.exports.getUserNameCont = function(req, res) {
  var username = req.query.username
  UsernameDAO.getUsername(username,function(err, data){
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