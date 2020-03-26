'use strict';
const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database');

class Library extends Model {}

Library.init({
  // attributes
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'library'
  // options
});

module.exports = Library;
