const ModelFilmesLocado = require('../models/filmes_locado')

class ServiceFilmesLocado {
    async LocarFilmes(idFilme, idCliente, dataLocacao, dataDevolucao) {
        if (!idFilme || !idCliente || !dataLocacao || !dataDevolucao) {
            throw new Error('Preencha todos os campos!')
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