const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config({ //eslint-disable-line
  path: 'env.env',
});
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
  },
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(3000, () => console.log('Listening on port 3000'));

app.get('/submissions', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/submissions.html'));
});

app.post('/submissions', (req, res) => {
  knex('articles').insert({
    originalTitle: req.body.originalTitle,
    ourTitle: req.body.ourTitle,
    URL: req.body.URL,
    rank: req.body.rank,
    date: req.body.date,
    column: req.body.column,
  }).then(() => {
    res.send('Successfully submitted.');
  }).catch((err) => {
    res.send('Error in submission.');
  });
});

app.get('/stories', (req, res) => {
  knex.raw('SELECT originalTitle, `column`, URL FROM articles WHERE date = CURDATE()')
    .then((DBres) => {
      res.send(DBres[0]);
    })
    .catch((DBres) => {
      res.send(DBres);
    });
});
