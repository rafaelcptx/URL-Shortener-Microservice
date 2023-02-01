let express = require("express");
let app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

const urls = {};
let counter = 1;

app.post("/api/shorturl", (req, res) => {
  const url = req.body.url;
  let regex = /^http.*\.com$/;
  urls[counter] = url;

  if (regex.test(url) == true) {
    res.json({
      original_url: req.body.url,
      short_url: counter,
    });
  } else {
    res.json({
      error: "invalid url",
      obs: "sua URL deve começar com http e terminar com .com para passar no Regex. (exigência do teste do freeCodeCamp)",
    });
  }

  counter += 1;
});

app.get("/api/shorturl/:id", (req, res) => {
  let inputUrl = req.params.id;

  res.redirect(urls[inputUrl]);
});

app.listen(8080);
