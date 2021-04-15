//importando el repositorio...
const ClienteRepository = require('./app/repositories/CustomerRepository')
const AccountRepository = require('./app/repositories/AccountRepository')
const CustomerService = require('./app/services/CustomerService')
const AccountService = require('./app/services/AccountService')

console.log('probando....')

/*ClienteRepository.create({
    name:'Juan',
    lastname:'Ferrer',
    id: '4321',
    email:  'juan@juan.com'
    }).then(console.log) //para que el programa espere a que la operacion termine..*/



    /*async function probandoElBuscar(){
        const cliente = await ClienteRepository.findById('4321')
        console.log(cliente)
    }

    probandoElBuscar()
    .then(console.log('OK')) //para que el programa espere a que la */


    //async,siempre que haya un await dentro de una funcion, la funcion debe llevar as
    /*async function probandoElEditar(){
        //await es para que nodejs espere que termine la ejecucion antes
        //de pasar a la siguiente instruccion
        await ClienteRepository.edit('4321',{
            name:'jose',
            lastname:'perez',
            })
        }
        
        probandoElEditar()
        .then(console.log('OK'))//para que el programa espere a que la operación termine..*/

        /*async function probandoEliminar(){
            await ClienteRepository.delete('4321')
        }

        probandoEliminar()
.then(console.log('OK')) //para que el programa ...*/


//Pruebas de cuentas repository

/*AccountRepository.create({
    id:'98765',
    amount:'0',
    customerid: '123456',
    openedat: '03/04/2021'
    }).then(console.log) //para que el programa espere a que la operacion termine..*/

    /*async function probandoEliminar(){
        await AccountRepository.delete('98765')
    }

    probandoEliminar()
.then(console.log('OK')) //para que el programa ...*/

    /*async function probandoListarCuentas(){
        const list = await AccountRepository.listAccountByCustomer('123456')
        console.log(list)
}

probandoListarCuentas()
.then(console.log('OK'))*/

//prueba de clientes Service



/*async function probarCrearCliente(){
    await CustomerService.create({
        id:"970228",
        lastname: 'Andres',
        name:'Galeano',
        email: 'andyg@gmail.com'
    })
}

probarCrearCliente().then(console.log('OK'))*/

/*async function probarEditar(){
    await CustomerService.edit('345678',{
        lastname: 'quitian',
        name: 'Obdulio',
    })
}

probarEditar().then(console.log('OK'))*/

/*async function probarEliminar(){
    await CustomerService.delete('34567')
}

probarEliminar().then(console.log('OK'))*/

/*async function probarBuscar(){
    const customer = await CustomerService.findCustomer('123456')
    console.log(customer)
}

probarBuscar().then(console.log('OK'))*/

//probando accountRepository

/*async function probar(){
    const result = await AccountService.listAccountsByCustomer('4567')
    console.log(result)
}

probar().then(console.log('OK'))*/

/* function probar(){
    const result = await AccountService.create({
        id:'1234567889',
        customerid:'34567',

    })
    console.log(result)
}

probar().then(console.log('OK'))*/