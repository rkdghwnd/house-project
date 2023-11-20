module.exports = (sequelize, DataTypes) => {
  const Product_question = sequelize.define(
    'Product_question',
    {
      question_type: {
        type: DataTypes.STRING(100),
      },
      is_buyer: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      question_nickname: {
        type: DataTypes.STRING(100),
        defaultValue: '유저',
      },
      question: {
        type: DataTypes.STRING(2000),
        defaultValue: '',
      },
      is_secret: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      chaset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    }
  );
  Product_question.associate = (db) => {
    db.Product_question.belongsTo(db.User);
    db.Product_question.belongsTo(db.Product);
    db.Product_question.hasOne(db.Product_answer);
  };

  return Product_question;
};
