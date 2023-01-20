// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// Categories have many Products
//hasMany instead of belongsToMany
Category.hasMany(Product, {
  foreignKey: 'category_id',
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through:{
    model: ProductTag,
    unique: false
  },
  //change the id to match the right foreign key
  as: 'category_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through:{
    model: ProductTag,
    unique: false
  },
  //change the id
  as: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
