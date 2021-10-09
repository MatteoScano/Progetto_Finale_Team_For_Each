'use strict';

module.exports = (sequelize, DataType) => {
  let DataEntry = sequelize.define('DataEntry', {
    // id missing because Sequelize adds it by default
    name:  DataType.STRING(100),
    cast: DataType.STRING(100),
    director: DataType.STRING(100),
    genre: DataType.STRING(100),
    rated: DataType.BOOLEAN(1),
    reviews: DataType.STRING(100),
    evaluation: DataType.INTEGER(1),
    releaseDate: DataType.INTEGER(12)
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'data'
  });

  // Association to other models (foreign keys)
  DataEntry.associate = function (models) {

  };

  return DataEntry;
};
