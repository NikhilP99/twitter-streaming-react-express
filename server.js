const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 5000;
const twitter = require('twitter');

var client = new twitter({
  consumer_key: 'sVDsAn4ypNf2NSMflzuwNhmhp',
  consumer_secret: 'T6R2eIq9FVjr7JdrzM3V7jbLiVZDs9qWB0tU4FFvDi0W93AvUC',
  access_token_key: '971777307785551873-l34WK2uU3XuwPDTkkcFQ7Xc2G5vM6Ci',
  access_token_secret: 'w5kjWOouOF2AuAQSQEBfNP5eIb5DEl4IjejlRRbyyLIVH'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/get-tweets', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/get-tweets', (req, res) => {
  client.get('/statuses/home_timeline.json' ,function(error, tweets, response) {
      return res.send(tweets);;
  });
})

app.post('/search-by-name', (req, res) => {
  var target = "/statuses/user_timeline.json?screen_name=" + req.params.handle + "&count=" + req.params.count ;
  client.get(target ,function(error, tweets, response) {
      return res.send(tweets);;
  });
})

app.listen(port, () => console.log(`Listening on port ${port}`));
