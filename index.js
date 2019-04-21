const express = require('express');
const app = express();
const getSoundsController = require('./contollers/getSoundsController');

app.use(express.static('sounds'))
app.get('/sound/:drumType', getSoundsController);

app.listen(3000, () => console.log('Gator app listening on port 3000!'));