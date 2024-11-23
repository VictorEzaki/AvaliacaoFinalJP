const database = require('../config/database')

class Filme {
    constructor() {
        this.model = database.db.define('filmes', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            titulo: {
                type: database.db.Sequelize.STRING
            },

            faixaEtaria: {
                type: database.db.Sequelize.INTEGER
            },

            diretor: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}

module.exports = new Filme().model