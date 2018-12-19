const {db} = require('./index.js');

const getAllStudents = (req, res, next) => {
  db.any('SELECT * FROM students')
  .then(students => {
    res.status(200).json({
      status: 'success',
      students: students
    })
  })
  .catch(err => next(err));
}

const getSingleStudent = (req, res, next) => {
  let studentId = parseInt(req.params.id);
  db.one('SELECT * FROM students WHERE id = $1', [studentId])
  .then (data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Received one student'
    })
  })
  .catch(err => next(err));
}

const createStudent = (req, res, next) => {
  db.none('INSERT INTO students(name, house) VALUES(${name}, ${house})', req.body)
  .then(() =>{
    res.status(200).json({
      status: 'success',
      message: 'New student added'
    })
  })
  .catch(err => next(err));
}

const updateStudent = (req, res, next) => {
  db.none('UPDATE students SET name = ${name}, house = ${house} WHERE id = ${id}', {
    name: req.body.name,
    house: req.body.house,
    id: parseInt(req.params.id)
  })
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'updated a student'
    })
  })
  .catch(err => next(err));
}

const studentsForOneHouse = (req, res, next) => {
  let houseName = req.params.house;
  db.any('SELECT students.name FROM students WHERE house = $1', houseName)
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'All students for a house'
    })
  })
  .catch(err => next(err));
}

const deleteStudent = (req, res, next) => {
  let studentId = parseInt(req.params.id);
  db.result('DELETE FROM students WHERE id = $1', studentId)
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'deleted a student',
      result: result
    })
  })
  .catch(err => next(err));
}

module.exports = {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  studentsForOneHouse,
  deleteStudent
}