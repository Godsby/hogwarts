const {db} = require('./index');

const getAllTeachers = (req, res, next) => {
  db.any('SELECT * FROM teachers')
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Received all teachers'
    })
  })
  .catch(err => next(err));
}

const getOneTeacher = (req, res, next) => {
  let teacherId = parseInt(req.params.id);
  db.one('SELECT * FROM teachers WHERE id = $1', teacherId)
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Received one teacher'
    })
  })
  .catch(err => next(err));
}

const studentsByOneTeacher = (req, res, next) => {
  let teacherId = parseInt(req.params.id);
  db.any('SELECT students.* FROM students JOIN classes ON student_id = students.id WHERE teacher_id = $1', teacherId)
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'All students taught by one teacher'
    })
  })
  .catch(err => next(err));
}

const deleteTeacher = (req, res, next) => {
  let teacherId = parseInt(req.params.id);
  db.result('DELETE FROM teachers WHERE id = $1', teacherId)
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'deleted a teacher'
    })
  })
  .catch(err => next(err));
}

module.exports = {
  getAllTeachers,
  studentsByOneTeacher,
  getOneTeacher,
  deleteTeacher
}