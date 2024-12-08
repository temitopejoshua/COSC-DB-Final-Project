const { Sequelize, DataTypes, Model } = require('sequelize');
const {dbConnector} = require('./../mysql_connector')

class BookModel extends Model {
    
}
BookModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER, // Use INTEGER instead of NUMBER
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      isbn: {
        type: DataTypes.STRING, // ISBNs are better stored as STRING
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publisher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      format: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      published: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize: dbConnector,
      modelName: "books",
      timestamps: false,
      createdAt: false,
      updatedAt: false
    }
  );
  
  module.exports = {
    BookModel
    };
