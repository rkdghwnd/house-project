module.exports = (sequelize, DataTypes) => {
  const Exhibition = sequelize.define(
    'Exhibition',
    {
      image_url: {
        type: DataTypes.TEXT,
        defaultValue: '',
      },
    },
    {
      chaset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    }
  );
  Exhibition.associate = (db) => {
    db.Exhibition.belongsToMany(db.User, {
      through: 'ExhibitionBookmark',
      as: 'ExhibitionBookmarkers',
    });
  };

  return Exhibition;
};
