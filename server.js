const express = require('express');
const app = express();
const path = require('path');
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

app.use(express.static(path.join(__dirname, '')));

app.listen(3000, () => console.log('Listening on port 3000'));

knex.select().table('articles').then( (success, err) => {
  console.log('success', success)
});