var MongoClient = requir("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url , function(err , db) {
    if(err)throw err;
    var dbo=db.db("mydb");
    var myobj = {name1:"best" , name2:"crickter" , name3:"in" , name4:" india" , name5:"is" , name6:"kohli" , name7:"of" , name8:"one" ,name9:"the" ,name10:"virat"};
    dbo.collection("words").insertOne(myobj , function(err , res) {
        if(err) throw err;
        console.log("words  inserted");
        db.close();

    });
});