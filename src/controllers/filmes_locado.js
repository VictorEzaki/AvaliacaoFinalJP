const ServiceFilmesLocado = require('../services/filmes_locado')

class ControllerFilmesLocado {
    async LocarFilme(req, res) {
        try {
            const { idFilme, idCliente } = req.params
            const { dataLocacao, dataDevolucao } = req.body

            const filmesLocado = await ServiceFilmesLocado.LocarFilmes(idFilme, idCliente, dataLocacao, dataDevolucao)
            return res.status(201).send({ filmesLocado: filmesLocado })
        } catch (e) {
            return res.status(400).send({ error: `Erro ao locar um filme ${e.message}` })
        }
    }

    async DevolverFilmes(req, res) {
        try {
            const { id } = req.params

            const filmesLocado = await ServiceFilmesLocado.DevolverFilmes(id)
            return res.status(201).send({ filmesLocado: filmesLocado })
        } catch (e) {
            return res.status(400).send({ error: `Erro ao devolver um filme ${e.message}` })
        }
    }
}

module.exports = new ControllerFilmesLocado()