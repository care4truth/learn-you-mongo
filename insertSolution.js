var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
  if (err) throw err
  var persons = db.collection('persons')
  
  var fName = process.argv[2];
  var lName = process.argv[3];
  var person = {
    firstName : fName,
    lastName : lName
  }

  persons.insert(person , function(err , data){
      if (err) { throw err; }
      console.log(JSON.stringify(person))
      db.close()
  })
})