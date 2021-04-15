const AccountController = module.exports
//Importando el módulo de la lógica
const AccountService = require('../services/AccountService');

AccountController.listAccoutsByCustomer = async (req, res, next) => {
    const params = req.params;

    try{
        const response = await AccountService.listAccountsByCustomer(params.id)

        //Enviando respuesta al cliente que retorna la lógica
        res.send(response)
        //--------------------------------------
    }catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.createAccount = async (req, res, next) => {
    const body = req.body;

    try{
        await AccountService.create(body)
        res.send({message: 'account created'})
      
    }catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.deleteAccount = async(req, res, next) => {
    const params = req.params;

    try{
        await AccountService.delete(params.id)

        res.send({message: 'Account deleted'})

    }catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);

    }
 }