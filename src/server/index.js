const express = require('express');
const data = require('./sheet.mock');

const app = express();

app.use(express.static('dist'));
app.get('/api/getMainSheetData', (req, res) => res.send({ response: data }));
app.get('/api/getBioSheetData', (req, res) => res.send({ response: 'Bio!' }));
app.get('/api/getMagicSheetData', (req, res) => res.send({ response: 'Magic!' }));
app.get('/api/getTraitsSheetData', (req, res) => res.send({ response: 'Traits' }));
app.listen(8080, () => console.log('Listening on port 8080!'));
