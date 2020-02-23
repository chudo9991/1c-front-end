let mongoClient = require("mongodb").MongoClient,
    url = "mongodb://localhost/sandbox";

mongoClient.connect(url, function(err,db){
    let humans = db.collection("humans");
    humans.insert({
        name:"Алексей",
        age:256
    }, function(err, result){console.log(result);
    });
});