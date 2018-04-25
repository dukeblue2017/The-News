const express = require('express');
const app = express();
const path = require('path');
const knex = require('knex');


app.use(express.static(path.join(__dirname, '')))

app.listen(3000, () => console.log('Listening on port 3000'));
