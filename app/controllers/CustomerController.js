const CustomerController = module.exports
//Importando el módulo de la lógica
const CustomerService = require('../services/CustomerService');

//Los parametros,req,res y next siempre son requeridos
//para el correcto funcionamiento del controlador,
//aca no va definido el path, se hace en otra parte
CustomerController.delete = async(req, res, next) => {
    //Extrayendo los Pathparams de la peticion
    const params = req.params;

    try{
        //Se supone que el id llega asi /customers/:id(acá no es con {} si no con : )
        //await (ya que el metodo es async) para esperar que termine
        await CustomerService.delete(params.id)

        //enviando la respuesta al cliente {postam por ejemplo}
        res.send({message: 'Customer deleted'})
        //-------------------------------------
    }catch(error) {//manejando las excepciones
        console.log({error});
        //retornando al cliente(postam por ejemplo) el error
        res.status(500).send({error: error.message}).end();
        next(error);

    }
 }

 //PUT /customers/:id Body: datos a editar
 CustomerController.edit = async (req, res, next) => {
     const params = req.params;
     //Extrayendo el body de la peticion
     const body = req.body;

     try{
         await CustomerService.edit(params.id, body)

         res.send({message: 'Customer updated'})
         //------------------------------------
     }catch(error) {
         console.log({error});
         res.status(500).send({error: error.message}).end();
         next(error);
     }
}

CustomerController.createCustomer = async (req, res, next) => {
    const body = req.body;

    try{
        await CustomerService.create(body)
        res.send({message: 'Customer created'})
        //-----------------------------------
    }catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

