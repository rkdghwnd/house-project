module.exports = (sequelize, DataTypes) => {
  const Product_image = sequelize.define(
    'Product_image',
    {
      src: {
        type: DataTypes.TEXT('long'), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
      },
      belong: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      chaset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    }
  );
  Product_image.associate = (db) => {
    db.Product_image.belongsTo(db.Product);
  };

  return Product_image;
};
