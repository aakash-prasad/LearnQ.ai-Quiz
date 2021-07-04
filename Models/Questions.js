const Sequelize = require('sequelize')
const {conn} = require('../connection')

const Questions = conn.define('question', {
  question:{
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  option_1:{
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  option_2:{
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  option_3:{
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  option_4:{
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  correct_option:{
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  marks_allocated:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  difficulty_level:{
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Questions;
