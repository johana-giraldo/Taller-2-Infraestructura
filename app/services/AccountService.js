const AccountService = module.exports
const CustomerRepository = require ('../repositories/CustomerRepository')
const AccountRepository = require ('../repositories/AccountRepository')


AccountService.listAccountsByCustomer = async (customerId) => {
    //Buscamos el cliente por id para verificar si existe
    const customerFound = await CustomerRepository.findById(customerId)

    //Si el tamaño de la lista es 0 es porque no existe un cliente con esa cédula
    if(customerFound.length === 0) {
        throw new Error('Customer does not exist')
    }

    //Cuando se retorna directamente el resultado de una función que haya que esperar el resultado, no es necesario utilizar await
    return AccountRepository.listAccountsByCustomer(customerId)
}


AccountService.create = async (account) => {
    //Buscamos el cliente por id para verificar si existe
    const customerFound = await CustomerRepository.findById(account.customerid)

    //Si la lista de resultados su tamaño es 0 es porque no 
    //existe el cliente con esa cédula
    if(customerFound.length === 0) {
        throw new Error('Customer does not exist')
    }

    //Consultando ñas cuentas del cliente, el id del cliente viene en el objeto
    const accountsByCustomer = await AccountRepository.listAccountsByCustomer(account.customerid)

    //Verificando que solo tenga maximo tres cuentas
    if(accountsByCustomer.length >=3) {
        throw new Error('no more than 3 accounts')
    }

    account.openedat = new Date();//colocando la fecha de apertura
    account.amount = 0;//colocando el saldo inicial
    await AccountRepository.create(account)
}
//-----------------------------------------------------

//REVISAR
AccountService.delete = async (idAccount) => {
    //Busco la cuenta
    const accountFound = await AccountRepository.findById(idAccount)
//Verifico si existe
    if(accountFound.length === 0) {
        throw new Error('Account does not exist')
    }else{
        //compruebo si la cuenta tiene saldo
        if(accountFound[0].amount > 0){
            throw new Error('Account with amount, can not be deleted')
        }else{
        // Elimino si no tiene saldo
            await AccountRepository.delete(idAccount)
        }
    }

}

//TRAER CUENTA
AccountService.getAccount = async (customerid, accountId) => {

const accountsFound = await AccountRepository.listAccountsByCustomer(customerid)

//Busco en la lista de cuentas el id que sea igual al id de la cuenta que voy a retirar
// si existe la guardo en accountFound de lo contrario retornar un null

let accountFound = null

for(i = 0; i < accountsFound.length; i++) {
    if (accountsFound[i].id === accountId) {
        accountFound = accountsFound[i];
    }
}
         if (accountFound == null) {
            throw new Error("Account does not exist:" + " " + accountId);
    }
        return accountFound;
    
}

//RETIRAR DINERO
AccountService.withdraw = async (accountId, customerId, withdrawMoney) => {
    //Traigo la cuenta
    //Compruebo que exista
    const accountBD = await this.getAccount(customerId, accountId)
    
    //Resto lo que habia con lo que voy a retirar
    let moneyAccount = accountBD.amount
    let withdrawlResult = moneyAccount - withdrawMoney

    //compruebo que alcance el saldo
    if(withdrawlResult < 0){
        throw new Error('Account have not balance')
    }else{
        accountBD.amount = withdrawlResult
    //Realizo el retiro
    await AccountRepository.withdrawAmount(accountBD)
    }
}


//CONSIGNAR DINERO
AccountService.consignation = async (accountId, customerId, consignMoney) => {
    //Traigo la cuenta
    //Compruebo que exista
    const accountBD = await this.getAccount(customerId, accountId)

    //Sumo el valor que tengo en la cuenta con lo que voy a consignar
    let moneyAccount = accountBD.amount
    let consignmentResult = moneyAccount + consignMoney

    accountBD.amount =consignmentResult
    //Realizo la consignacion
    await AccountRepository.consignationAmount(accountBD)
}

//TRANSFERENCIA ENTRE CUENTAS

AccountService.transactionAccounts = async (data) => {
    //Traer las cuentas
    //validar que ambas cuentas existan
    const accountRoot = await this.getAccount(data.customerIdOrigen, data.cuentaOrigen)
    const accountDestination = await this.getAccount(data.customerIdDestino, data.cuentaDestino)
    
    //comprobar que la cuenta origen tenga saldo
    let moneyAccountRoot = accountRoot.amount
    let withdrawlResult = moneyAccountRoot - data.amountTransaction

    //compruebo que alcance el saldo
    if(withdrawlResult < 0){
        throw new Error('Root account have not balance')
    }else{
        accountRoot.amount = withdrawlResult
    //guardar el retiro de cuenta origen
    await AccountRepository.consignationAmount(accountRoot)

    //Realizar consignacion
    let moneyAccount = accountDestination.amount
    let consignmentResult = moneyAccount + data.amountTransaction

    accountDestination.amount =consignmentResult
    //Realizo la consignacion
    await AccountRepository.consignationAmount(accountDestination)

    }
}
