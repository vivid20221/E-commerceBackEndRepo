// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
  
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoINcrement: true
    },
    // define columns
   name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
      
    },
    product_stock:{
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id'
      }
    }
    // take a look at the mini project in the Trip.js model has a location_id which is a foreign key. This is how you will add your category_id 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
