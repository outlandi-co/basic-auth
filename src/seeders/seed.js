// seeders/seed.js

const sequelize = require('../models/index');
const User = require('../models/User');

async function seed() {
  await sequelize.sync({ force: true }); // This will drop existing tables and recreate them
  try {
    await User.create({
      username: 'AJJ714OC',
      password: 'password',
    });
    console.log('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

seed();
