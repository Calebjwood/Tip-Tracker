const sequelize = require("../config/connection");
const User = require("../models/User");
const Job = require("../models/job");


const userData = require("./userData.json");
const jobData = require("./jobData.json");


const seedDataBase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const job of jobData) {
    await Job.create({
      ...job,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDataBase();