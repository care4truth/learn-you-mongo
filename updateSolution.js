var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
  if (err) throw err
  var users = db.collection('users')
  
  var newage = 40
  
  users.update({
      username : "tinatime"
  },{
      $set : {
          age : newage
      }
      
  }, function(err){
      if (err) { throw err; }
      db.close()
  })
})