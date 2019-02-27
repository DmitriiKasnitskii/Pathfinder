const express = require('express');
const data = require('./sheet.mock');

const app = express();

app.use(express.static('dist'));
app.get('/api/getMainSheetData', (req, res) => res.send({ response: data }));
app.listen(8080, () => console.log('Listening on port 8080!'));
