const database = require('../config/database')
const filme = require('./filme')
const cliente = require('./cliente')

class FilmesLocado {
    constructor() {
        this.model = database.db.define('filmes_locado', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            dataLocacao: {
                type: database.db.Sequelize.DATE
            },

            dataDevolucao: {
                type: database.db.Sequelize.DATE
            },

            devolvido: {
                type: database.db.Sequelize.BOOLEAN
            },

            idFilme: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: filme,
                    key: 'id'
                }
            },

            idCliente: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: cliente,
                    key: 'id'
                }
            }
        })

        this.model.belongsTo(filme, {
            foreignKey: 'idFilme'
        })

        this.model.belongsTo(cliente, {
            foreignKey: 'idCliente'
        })
    }
}

module.exports = new FilmesLocado().model