const { TooManyRequests } = require('http-errors');

require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "pizzariadh",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {
      "underscored": true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "pizzariadh",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "pizzariadh",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
