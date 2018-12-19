const {db} = require('./index');

const getAllWands = (req, res, next) => {
  db.any('SELECT * FROM wands')
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Received all wands'
    })
  })
  .catch(err => next(err));
}

const deleteWand = (req, res, next) => {
  let wandId = parseInt(req.params.id);
  db.result('DELETE FROM wands WHERE id = $1', wandId)
  .then(result => {
    res.status(200).json({
      status: 'success',
      result: result,
      message: 'Delete a wand'
    })
  })
  .catch(err => next(err));
}

module.exports = {
  getAllWands,
  deleteWand
}