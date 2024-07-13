const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;
const responseText = process.env.RESPONSE_TEXT || 'Hello World';

app.get('/', (req, res) => {
  res.send(responseText);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
