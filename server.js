const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
MongoClient = require('mongodb').MongoClient;

var db;
var collection;

const url = "mongodb+srv://Charles:Charles123@cluster0-o53eh.mongodb.net/test?retryWrites=true";
const dbName = "MealCult";

app.listen(3000, () => {
    MongoClient.connect(url, (error, client) => {
        if(error) {
            throw error;
            console.log('mangofuck')
        }
        db = client.db(dbName);
        console.log("Connected to `" + dbName + "`!");
    });
});

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('sites').find().toArray((err, sites) => {
    if (err) return console.log(err)
    db.collection('reviews').find().toArray((err, reviews) => {
      if (err) return console.log(err)
      res.render('index.ejs', {reviews: reviews, sites: sites})
    })
  })
})

app.post('/reviews', (req, res) => {
  db.collection('reviews').save({name: req.body.name, site: req.body.site, restaurant: req.body.restaurant, review:req.body.review}, (err, result) => {
    if (err) return console.log(err)
    res.redirect('/')
  })
  console.log(req.body)
})

app.put('/siteUp', (req, res) => {
  db.collection('sites')
  .findOneAndUpdate({url: req.body.url, promo: req.body.promo}, {
    $set: {
      siteUp:req.body.siteUp +1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.put('/siteDown', (req, res) => {
  db.collection('sites')
  .findOneAndUpdate({url: req.body.url, promo: req.body.promo}, {
    $set: {
      siteDown:req.body.siteDown +1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})
