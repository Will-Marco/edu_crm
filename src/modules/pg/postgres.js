const { Sequelize } = require("sequelize");
const SessionModel = require("../..//models/SessionModel");
const UserModel = require("../../models/UserModel");
const PermissionModel = require("../../models/PermissionModel");
const relations = require("./relations");
const init = require("./init");
const UserPermissionModel = require("../../models/UserPermissionModel");
const TeachersModel = require("../../models/TeachersModel");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
});

module.exports = async function postgres() {
  try {
    await sequelize.authenticate();

    let db = {};

    db.users = await UserModel(sequelize, Sequelize);
    db.sessions = await SessionModel(sequelize, Sequelize);
    db.permissions = await PermissionModel(sequelize, Sequelize);
    db.user_permissions = await UserPermissionModel(sequelize, Sequelize);
    // db.techers_model = await TeachersModel(sequelize, Sequelize);

    await relations(db);

    await init(db);

    await sequelize.sync();

    return db;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
