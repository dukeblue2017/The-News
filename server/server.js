const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config({
  path: 'env.env'
});
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : process.env.host,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database,
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(3000, () => console.log('Listening on port 3000'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/homepage.html'));
})

app.get('/submissions', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/submissions.html'));
})

app.post('/submissions', (req, res) => {
  knex('articles').insert({
    originalTitle: req.body.originalTitle,
    ourTitle: req.body.ourTitle,
    URL: req.body.URL,
    rank: req.body.rank,
    date: req.body.date,
  }).then( (success) => {
    res.send('Successfully submitted.');
  }).catch( (err) => {
    res.send('Error in submission.');
  })
})

app.get('/stories', (req, res) => {
  knex.raw('SELECT originalTitle, rank FROM articles WHERE date = CURDATE()')
    .then((DBres) => {
      res.send(DBres[0]);
    })
    .catch((DBres) => {
      res.send(DBres);
    })
})