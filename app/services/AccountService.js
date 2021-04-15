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
    if(accountFound.length < 0) {
        throw new Error('Account does not exist')
    }
//compruebo si la cuenta tiene saldo
    if(accountFound.amount > 0){
        throw new Error('Account with amount, can not be deleted')
    }
// Elimino si no tiene saldo
    await AccountRepository.delete(idAccount)
}

//REVISAR TRAER CUENTA
/*AccountService.getAccount = async (customerid) => {

const accountFound = await AccountRepository.listAccountsByCustomer(customerid)

//Busco en la lista de cuentas el id que sea igual al id de la cuenta que voy a retirar
// si existe la guardo en accountFound de lo contrario retornar un null
for(i = 0; i < accountFound.length(); i++) {
    //if (accountFound.get(i).getId().equals(customerid.getId())) {
        accountFound = cuentas.get(i);
    }
    if (accountFound == null) {
    throw new Error("account does not exist");
    }
return accountFound;
}

//Comprobar si cuenta tiene saldo
AccountService.accountWithAmount = async (idAccount.amount) {

    if(idAccount./*algo para traerla*/ //- amount < 0){
/*return false;
    }else{
        return true;
    }
//}

//RETIRAR DINERO
AccountService.withdraw = async (idAccount) => {
    //Traigo la cuenta
    //Compruebo que exista
    const accountBD = this.getAccount(idAccount)
    //Resto lo que habia con lo que voy a retirar

    const moneyAccount = idAccount
    const wthdrawlMoney = //que pongo para retirar?
    const withdrawlResult = moneyAccount - withdrawlMoney
    //compruebo que alcance el saldo
    if(this.accountWithAmount == false){
        throw new Error('Account have not balance')
    }
    //Realizo el retiro
    await AccountRepository.withdrawAmount(idAccount)
}

//CONSIGNAR DINERO
AccountService.consignation = async (idAccount) => {
    //Traigo la cuenta
    //Compruebo que exista
    const accountBD = this.getAccount(idAccount)
    //Resto lo que habia con lo que voy a retirar

    const moneyAccount = idAccount//dinero en la cuenta
    const consignationMoney = //que pongo para retirar?
    const withdrawlResult = moneyAccount + consignationMoney

    //Realizo la consignacion
    await AccountRepository.consignationAmount(idAccount)
}

//TRANSFERENCIA ENTRE CUENTAS

AccountService.transaction = async (idAccount) => {
    //Traer las cuentas? como traigo las dos cuentas
    //validar que ambas cuentas existan
    //comprobar que la cuenta origen tenga saldo
    //guardar el retiro
    //guardar consignacion


}*/
