var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



app.get("/", function(req, res){
    var url = "https://opentdb.com/api.php?amount=10&type=multiple"
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body)
            res.render("index", {data: data});
        }
    });
});

app.listen(3000, () => console.log('Quiz App is now running on port 3000!'));