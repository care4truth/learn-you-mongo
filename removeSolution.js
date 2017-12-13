var mongo = require('mongodb').MongoClient;

var databaseName = process.argv[2];

var url = 'mongodb://localhost:27017/'+ databaseName;

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var cName = process.argv[3];
  var col = db.collection(cName);
  
  col.remove ({
      _id : process.argv[4]
  } , function(err){
      if (err) { throw err; }
      db.close();
  })
})
