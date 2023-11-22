module.exports = (sequelize, DataTypes) => {
  const Final_order = sequelize.define(
    'Final_order',
    {
      product_name: {
        type: DataTypes.TEXT,
        defaultValue: '',
      },
      brand_name: {
        type: DataTypes.TEXT,
        defaultValue: '',
      },
      image_url: {
        type: DataTypes.TEXT,
        defaultValue: '',
      },
      free_delivery: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      selling_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      chaset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    }
  );
  Final_order.associate = (db) => {
    db.Final_order.belongsTo(db.User);
    db.Final_order.hasMany(db.Final_cart_product);
  };

  return Final_order;
};
