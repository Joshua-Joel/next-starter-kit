const express = require('express');
const router = express.Router();
router.use(express.json());
const fetchResponse = require('../lib/fetch_response');

router.get('/:loanNumber', async (req, res) => {
  res.status(200).json(await fetchResponse('loans', 'loans.js'));
});

module.exports = router;
