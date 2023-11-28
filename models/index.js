// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

/*Product belongs to Category, and Category has many Product models, 
as a category can have multiple products but a product can only belong to one category */

/*Product belongs to many Tag models, and Tag belongs to many Product models. 
Allow products to have multiple tags and tags to have many products 
by using the ProductTag through model. */

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Product, {
  foreignKey: "category_id",
  through: ProductTag,
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: "tag_id",
  through: ProductTag,
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
