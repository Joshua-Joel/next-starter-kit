const express = require('express');
const router = express.Router();
router.use(express.json());
const fetchResponse = require('../lib/fetch_response');

router.get('/:loanNumber', async (req, res) => {
  console.log("request received..!");
  res.status(200).json(await fetchResponse('loans', 'loans.json'));
});

module.exports = router;
