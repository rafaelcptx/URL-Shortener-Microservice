let express = require("express");
let app = express();
const bodyParser = require("body-parser");
const isUrl = require("is-url");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

const urls = {};
let counter = 1;

app.post("/api/shorturl", (req, res) => {
  const url = req.body.url;

  if (!isUrl(url)) {
    res.json({
      error: "invalid url",
    });
    return;
  }

  counter += 1;
  urls[counter] = url;

  res.json({
    original_url: req.body.url,
    short_url: counter,
  });
});

app.get("/api/shorturl/:id", (req, res) => {
  let inputUrl = req.params.id;

  res.redirect(urls[inputUrl]);
});

app.listen(8080);
