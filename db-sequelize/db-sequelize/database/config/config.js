require('dotenv').config()

module.exports = {

    "development": {
      "username": process.env.USERNAME_DB,
      "password": process.env.PASSWORD_DB,
      "database": process.env.NAME_DB,
      "port": process.env.PORT_DB,
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": 0
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": 0
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": 0
    }
}
