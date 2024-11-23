const ModelFilmesLocado = require('../models/filmes_locado')
const ModelFilme = require('./../models/filme')
const ModelCliente = require('./../models/cliente')

class ServiceFilmesLocado {
    async LocarFilmes(idFilme, idCliente, dataLocacao, dataDevolucao) {
        if (!idFilme || !idCliente || !dataLocacao || !dataDevolucao) {
            throw new Error('Preencha todos os campos!')
        }

        const filme = await ModelFilme.findByPk(idFilme)
        if (!filme) {
            throw new Error('Filme não existente!')
        }

        const cliente = await ModelCliente.findByPk(idCliente)
        if (!cliente) {
            throw new Error('Cliente não existente!')
        }

        return await ModelFilmesLocado.create({
            idFilme,
            idCliente,
            dataLocacao,
            dataDevolucao,
            devolvido: false
        })
    }

    async DevolverFilmes(id) {
        if (!id) {
            throw new Error('Favor informar o ID!')
        }

        const filmesLocado = await ModelFilmesLocado.findByPk(id)
        if (!filmesLocado) {
            throw new Error('Filme alugado não encontrado')
        }

        filmesLocado.devolvido = true
        filmesLocado.save()

        return filmesLocado
    }
}

module.exports = new ServiceFilmesLocado()