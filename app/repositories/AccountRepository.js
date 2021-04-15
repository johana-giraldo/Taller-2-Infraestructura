const AccountRepository = module.exports
const DB = require('../config/database')

AccountRepository.create = (account) => {
    return DB('accounts').insert(account)
}

AccountRepository.delete = (id) => {
    return DB('accounts').where( { id: id }).del()
}

AccountRepository.listAccountsByCustomer = (customerId) => {
    return DB ('accounts').where({customerid : customerId}).select('*')
}

AccountRepository.findById = (id) => {
    return DB('accounts').where({ id: id }).select('*')
}

AccountRepository.withdrawAmount = (id) => {
    return DB ('accounts').where({ id: id}).withdraw(amount)//poner algo que signifique retirar
}
AccountRepository.consignationAmount = (id) => {
    return DB ('accounts').where({ id: id}).consignation(amount)//poner algo que signifique consignar
}
