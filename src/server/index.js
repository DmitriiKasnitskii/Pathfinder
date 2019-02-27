const express = require('express');

const app = express();

const mainData = {
  CharacterName: 'Arf De Kar',
  PlayerName: 'Sergey Kobelev',
  Deity: 'None',
  Religion: 'None',
  Alignment: 'Chaotic Good',
  Class: 'Sorcerer',
  Race: 'Aasimar / Outsider',
  Size: 'Medium / 5ft',
  Gender: 'Male',
  CharacterLevel: 1,
  ExperienceCur: 0,
  ExperienceNext: 2000,
  Speed: 'Walk 30 ft.',
  Vision: 'Darkvision (60 ft.)',
  Height: "6' 4\"",
  Age: 20,
  Eyes: '',
  Hair: '',
};

app.use(express.static('dist'));
app.get('/api/getMainData', (req, res) => res.send({ mainData }));
app.listen(8080, () => console.log('Listening on port 8080!'));
