const ModelFilme = require('./../models/filme')

class ServiceFilme {
    async CreateFilme(titulo, classificacaoIndicativa, diretor) {
        if (!titulo || !classificacaoIndicativa || !diretor) {
            throw new Error('Preencha todos os campos!')
        }

        return await ModelFilme.create({
            titulo,
            classificacaoIndicativa,
            diretor
        })
    }

    async GetFilmes() {
        const filmes = await ModelFilme.findAll()
        return filmes
    }

    async UpdateFilme(id, titulo, classificacaoIndicativa, diretor) {
        if (!id) {
            throw new Error('Favor informar o ID!')
        }

        const filme = await ModelFilme.findByPk(id)
        if (!filme) {
            throw new Error('Filme não encontrado!')
        }

        filme.titulo = titulo || filme.titulo
        filme.classificacaoIndicativa = classificacaoIndicativa || filme.classificacaoIndicativa
        filme.diretor = diretor || filme.diretor

        filme.save()
        return filme
    }

    async DeleteFilme(id) {
        if (!id) {
            throw new Error('Favor informa o ID!')
        }

        const filme = await ModelFilme.findByPk(id)
        if (!filme) {
            throw new Error("Filme não encontrado!");
        }

        filme.titulo = 'Filme apagado'
        filme.classificacaoIndicativa = 0
        filme.diretor = 'Filme apagado'
        filme.save()

        return filme
    }
}

module.exports = new ServiceFilme()