//Install express server
const express = require('express');

const path = require('path');

const app = express();

const router = express.Router();

const analysis = require('./routes/scraper')(router);

const bodyParser = require('body-parser');

const cors = require('cors');

const port = process.env.PORT || 8080;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/wire-android-analysis'));

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(bodyParser.json({
  limit: '50mb'
}));

app.use('', analysis);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/wire-android-analysis/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port, () => {
  console.log('The server is running in port ' + port);
});
