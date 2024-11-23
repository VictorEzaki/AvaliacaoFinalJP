const { Sequelize } = require('sequelize')

class DataBase {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: 'locadora',
            host: 'localhost',
            username: 'root',
            dialect: 'mysql',
            password: ''
        }) 
    }
}

module.exports = new DataBase()