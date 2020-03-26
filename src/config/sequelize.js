require('dotenv').config();

const db_config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mariadb'
};

module.exports = {
  development: db_config,
  test: db_config,
  production: db_config,
};
