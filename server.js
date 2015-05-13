var express = require("express"),
    app = express();

app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.listen(8008, function() {
  console.log("Im listening...");
});
