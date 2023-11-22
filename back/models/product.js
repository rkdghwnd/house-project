module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      product_name: {
        type: DataTypes.TEXT,
      },
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brand_name: {
        type: DataTypes.STRING(100),
        defaultValue: '',
      },
      original_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      free_delivery: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_departure_today: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_special_price: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_overseas_purchase: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      delivery_restrict: {
        type: DataTypes.STRING(100),
      },
      refund_fee: {
        type: DataTypes.INTEGER,
      },
      exchange_fee: {
        type: DataTypes.INTEGER,
      },
      refund_address: {
        type: DataTypes.TEXT('long'),
      },
      review_avg: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      review_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      scrap_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      wish_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      selling_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      product_description_table: {
        type: DataTypes.TEXT('long'),
      },
      options: {
        type: DataTypes.TEXT('long'),
      },
      seller_info: {
        type: DataTypes.TEXT('long'),
      },
      category_index: {
        type: DataTypes.INTEGER,
      },
      hotdeal_end_at: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      chaset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    }
  );
  Product.associate = (db) => {
    db.Product.hasMany(db.Review);
    db.Product.hasMany(db.Product_image);

    db.Product.hasMany(db.Product_question);
    db.Product.hasMany(db.Product_answer);

    // 좋아요 기능, through : N : M 관계테이블 이름 설정, as : 관계에 대한 별칭(상대에 대한)
    db.Product.belongsToMany(db.User, {
      through: 'Bookmark',
      as: 'Bookmarkers',
    }); // post.addBookmarkers, post.removeBookmarkers
  };

  return Product;
};
