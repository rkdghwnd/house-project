module.exports = (sequelize, DataTypes) => {
  const Final_cart_product = sequelize.define(
    'Final_cart_product',
    {
      product_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      product_option: {
        type: DataTypes.TEXT,
        defaultValue: '',
      },
    },
    {
      chaset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    }
  );
  Final_cart_product.associate = (db) => {
    db.Final_cart_product.belongsTo(db.User);
    db.Final_cart_product.belongsTo(db.Final_order);
  };

  return Final_cart_product;
};
