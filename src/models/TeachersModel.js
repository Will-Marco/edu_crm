module.exports = async (sequelize, Sequelize) => {
  return await sequelize.define("teachers", {
    teacher_is: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    techer_phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    techer_skills: {
      type: Sequelize.DataTypes.ARRAY(Sequelize.STRING),
      allowNull: false,
      defaultValue: [],
    },
  });
};
