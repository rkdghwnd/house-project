'use strict';
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;

sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 테이블 가져와서 실행
db.Exhibition = require('./exhibition')(sequelize, Sequelize);
db.Final_cart_product = require('./final_cart_product')(sequelize, Sequelize);
db.Final_order = require('./final_order')(sequelize, Sequelize);
db.Product_answer = require('./product_answer')(sequelize, Sequelize);
db.Product_image = require('./product_image')(sequelize, Sequelize);
db.Product_question = require('./product_question')(sequelize, Sequelize);
db.Product = require('./product')(sequelize, Sequelize);
db.Review = require('./review')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

// associate 문 실행
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
