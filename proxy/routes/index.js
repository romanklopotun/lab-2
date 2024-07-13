const express = require('express');
const router = express.Router();
const proxyService = require('../services/proxyService');

router.get('/', async (req, res) => {
  try {
    const data = await proxyService.getRoot();
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching data from API');
  }
});

module.exports = router;
