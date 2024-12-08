const { Sequelize } = require("sequelize");


const dbConnector = new Sequelize({
    database:'library',
    username: 'capricorn',
    password: 'Welcome123',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
})

dbConnector.authenticate().then(() => {
    console.log("Connected to the database successfully")
}).catch((error) => console.log("An error occured when trying to connect to the database " + error))

module.exports = {
    dbConnector
    };
