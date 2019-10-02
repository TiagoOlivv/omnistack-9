const User = require('../models/User');

// Métodos de um controller 
// index (criando método que está retornando uma listagem de sessoes)
// show (listar uma unica sessao)
// store (criar uma sessao)
// update (alterar sessao)
// destroy (remover ou destruir uma sessao)

module.exports = {
    async store(req, res){
        const { email } = req.body;
        let user =  await User.findOne({ email });
        
        if (!user)
            user =  await User.create({ email });

        return res.json(user);
    }
};