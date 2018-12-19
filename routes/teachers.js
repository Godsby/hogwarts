const express = require('express');
const router = express.Router();
const db = require('../db/teachersQueries');

router.get('/', db.getAllTeachers);
router.get('/:id', db.getOneTeacher);
router.get('/students/:id', db.studentsByOneTeacher);
router.delete('/:id', db.deleteTeacher);

module.exports = router;