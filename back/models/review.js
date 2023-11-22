module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    'Review',
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      review_star: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      review_img: {
        type: DataTypes.STRING(2000),
        defaultValue: null,
      },
      praise_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      review_type: {
        type: DataTypes.STRING(100),
        defaultValue: '오늘의집 구매',
      },
      writer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      writer_nickname: {
        type: DataTypes.STRING(100),
      },
      writer_profile_image_url: {
        type: DataTypes.STRING(2000),
      },
      writer_thumnail_profile_image_url: {
        type: DataTypes.STRING(2000),
      },
    },
    {
      chaset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    }
  );
  Review.associate = (db) => {
    db.Review.belongsTo(db.User);
    db.Review.belongsTo(db.Product);
    db.Review.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // post.addLikers, post.removeLikers
  };

  return Review;
};
