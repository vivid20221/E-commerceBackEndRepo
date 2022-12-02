const seedCategories = require('./category');
const seedProducts = require('./products');
const seedTags = require('./tag');
const seedProducts = require('./products');


const sequelize = require('../config/connection');


const seedAll = ansync () => {
    await sequelize.sync({ force: true});
    console.log('\n----DATABASE SYNC ----\n');
    await seedCategories();
    console.log('\n---- CATEGORIES SEEDED ----\n');

    await seedProducts();
    console.log('\n---- PRODUCTS SEEDED ----\n');

    await seedTags();
    console.log('\n---- TAGS SEEDED ----\n');

    await seedProducts();
    console.log('\n---- PRODUCTS TAGS SEEDED ----\n');

    process.exit(0);
};

seedAll();
