var express = require("express"),
    jade = require('jade'),
    app = express();

app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/", express.static(__dirname));

app.set('views', './views');
app.set('view engine', 'jade');

app.get("/", function (req, res) {
  //res.sendFile(__dirname + "/index.jade");
  res.render('index');
});

app.get("/home.html", function(req, res) {
  res.render('home');
});

app.listen(8008, function() {
  console.log("Im listening...");
});
