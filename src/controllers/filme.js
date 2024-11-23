const ServiceFilme = require('./../services/filme')

class ControllerFilme {
    async CreateFilme(req, res) {
        try {
            const { titulo, faixaEtaria, diretor } = req.body

            const filme = await ServiceFilme.CreateFilme(titulo, faixaEtaria, diretor)
            return res.status(201).send({ filme: filme })
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar um filme ${e.message}` })
        }
    }

    async GetFilmes(req, res) {
        try {
            const filmes = await ServiceFilme.GetFilmes()
            return res.status(200).send({ filmes: filmes })
        } catch (e) {
            return res.status(400).send({ error: `Erro ao procurar os filmes ${e.message}` })
        }
    }

    async UpdateFilme(req, res) {
        try {
            const { id } = req.params
            const { titulo, faixaEtaria, diretor } = req.body

            const filme = await ServiceFilme.UpdateFilme(id, titulo, faixaEtaria, diretor)
            return res.status(201).send({ filme: filme })
        } catch (e) {
            return res.status(400).send({ error: `Erro ao atualizar um filme ${e.message}` })
        }
    }

    async DeleteFilme(req, res) {
        try {
            const { id } = req.params
            
            await ServiceFilme.DeleteFilme(id)
            return res.status(201).send()
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar um filme ${e.message}` })
        }
    }
}

module.exports = new ControllerFilme()