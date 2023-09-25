const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tip extends Model {}

Tip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    hours: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    tips: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    job_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'job',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tip',
  }
);

module.exports = Tip;
