const ModelFilme = require('./../models/filme')

class ServiceFilme {
    async CreateFilme(titulo, faixaEtaria, diretor) {
        if (!titulo || !faixaEtaria || !diretor) {
            throw new Error('Preencha todos os campos!')
        }

        return await ModelFilme.create({
            titulo,
            faixaEtaria,
            diretor
        })
    }

    async GetFilmes() {
        const filmes = await ModelFilme.findAll()
        return filmes
    }

    async UpdateFilme(id, titulo, faixaEtaria, diretor) {
        if (!id) {
            throw new Error('Favor informar o ID!')
        }

        const filme = await ModelFilme.findByPk(id)
        if (!filme) {
            throw new Error('Filme não encontrado!')
        }

        filme.titulo = titulo || filme.titulo
        filme.faixaEtaria = faixaEtaria || filme.faixaEtaria
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

        return filme.destroy()
    }
}

module.exports = new ServiceFilme()