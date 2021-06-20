const Sequelize  = require('sequelize');

const connection = new Sequelize('learnq_assesment', 'root', 'Aakash@123', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = {
  conn:connection
}