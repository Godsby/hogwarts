const express = require('express');
const router = express.Router();
const db = require('../db/wandsQueries');

router.get('/', db.getAllWands);
router.delete('/:id', db.deleteWand);

module.exports = router;