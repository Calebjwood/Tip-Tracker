const sequelize = require("../config/connection");

const {User, Job, Tip} = require('../models')

const userData = require("./userData.json");
const jobData = require("./jobData.json");
const tipData = require('./tipsData.json')


const seedDataBase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const jobs = await Job.bulkCreate(jobData, {
    individualHooks: true,
    returning: true,
  });

  const tips = await Tip.bulkCreate(tipData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
  
}

  



seedDataBase();