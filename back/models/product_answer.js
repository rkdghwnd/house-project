module.exports = (sequelize, DataTypes) => {
  const Product_answer = sequelize.define(
    'Product_answer',
    {
      is_secret: {
        type: DataTypes.BOOLEAN,
      },
      answer_nickname: {
        type: DataTypes.STRING(100),
        defaultValue: '업체',
      },
      answer: {
        type: DataTypes.STRING(2000),
        defaultValue: '',
      },
    },
    {
      chaset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    }
  );
  Product_answer.associate = (db) => {
    db.Product_answer.belongsTo(db.User);
    db.Product_answer.belongsTo(db.Product_question);
    db.Product_answer.belongsTo(db.Product);
  };

  return Product_answer;
};
