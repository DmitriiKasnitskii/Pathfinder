const express = require('express');
const bodyParser = require('body-parser');
const data = require('./sheet.mock');
const { Users } = require('./sequelize');

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/api/getMainSheetData', (req, res) => res.send({ response: data }));
app.get('/api/getBioSheetData', (req, res) => res.send({ response: 'Bio!' }));
app.get('/api/getMagicSheetData', (req, res) => res.send({ response: 'Magic!' }));
app.get('/api/getTraitsSheetData', (req, res) => res.send({ response: 'Traits' }));

app.get('/api/users', async (req, res) => {
  const usersData = await Users.findAll();
  console.log(usersData);
});

app.listen(8080, () => console.log('Listening on port 8080!'));
