module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING(50), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        defaultValue: null,
      },
      introduce: {
        type: DataTypes.STRING(100),
        defaultValue: null,
      },
      provider: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      snsId: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      profile_img: {
        type: DataTypes.STRING(500),
        defaultValue: 'basic-profile-image.png',
      },
      homepage: {
        type: DataTypes.STRING(500),
        defaultValue: '',
      },
      gender: {
        type: DataTypes.STRING(10),
        defaultValue: 'mail',
      },
      birth: {
        type: DataTypes.STRING(30),
        defaultValue: '2023-01-01',
      },
      withdraw: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      chaset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    }
  );
  User.associate = (db) => {
    db.User.hasMany(db.Product_question);
    db.User.hasOne(db.Review);

    db.User.belongsToMany(db.Review, { through: 'Like', as: 'Liked' });
    // 좋아요 기능, through : N : M 관계테이블 이름 설정, as : 관계에 대한 별칭(상대에 대한)
    db.User.belongsToMany(db.Product, {
      through: 'Bookmark',
      as: 'Bookmarked',
    });
    db.User.belongsToMany(db.User, {
      through: 'Follow',
      as: 'Followers',
      foreignKey: 'followingId',
      // 서로 같은 테이블을 관계짓는 경우 속성에 대한 구별이 어려울 수 있으니
      // foreign key의 이름을 따로 명시해서 만드는게 좋다.
    });
    db.User.belongsToMany(db.User, {
      through: 'Follow',
      as: 'Followings',
      foreignKey: 'followerId',
    });
    db.User.belongsToMany(db.Exhibition, {
      through: 'ExhibitionBookmark',
      as: 'ExhibitionBookmarked',
    });
    db.User.belongsTo(db.Final_order);

    db.User.hasMany(db.Final_cart_product);
  };

  return User;
};
