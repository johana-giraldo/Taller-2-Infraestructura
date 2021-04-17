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

AccountRepository.withdrawAmount = (account) => {
    return DB ('accounts').where({ id: account.id}).update(account)
}
AccountRepository.consignationAmount = (account) => {
    return DB ('accounts').where({ id: account.id}).update(account)
}

AccountRepository.transactionBetweenAccounts = (account) => {
    return DB ('accounts').where({ id: account.id}).update(account)
}
