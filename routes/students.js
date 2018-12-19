const express = require('express');
const router = express.Router();
const db = require('../db/studentsQueries.js');

router.get('/', db.getAllStudents);
router.get('/:id', db.getSingleStudent);
router.post('/', db.createStudent);
router.put('/:id', db.updateStudent);
router.get('/house/:house', db.studentsForOneHouse);
router.delete('/:id', db.deleteStudent);

module.exports = router;