

const connection = require('../database/connection');

module.exports = {


    async index(request, response) {

        const atendimentos = await connection('Atendimento')
        .select('Atendimento.*');

        return response.json(atendimentos);
    },

    async one(request, response) {
        const { id } = request.params;

        const atendimento = await connection('Atendimento')
            .where('id', parseInt(id))
            .first();

       return response.json({ atendimento });
    },

    async create(request, response) {
        const { coordenador, assunto, descricao, data } = request.body;

        await connection('Atendimento').insert({
            coordenador,
            assunto,
            descricao,
            data
        });


        return response.status(204).json();
    },

    async edit(request, response) {
        const { id } = request.params;
        const novoAtendimento = request.body;

        const atendimento = await connection('Atendimento')
            .where('id', parseInt(id))
            .update(novoAtendimento);

    //    return response.status(204).json({'id': id});
       return response.json({ atendimento });
    },

    async delete(request, response) {
        const { id } = request.params;

        const atendimento = await connection('Atendimento')
            .where('id', id)
            .first();

       await connection('Atendimento').where('id', id).delete();

       return response.status(204).json();
    },


};
