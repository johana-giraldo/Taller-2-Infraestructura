const express = require('express');
const CustomerController = require('../controllers/CustomerController')
const AccountController  = require('../controllers/AccountController')

const router = express.Router();

router.delete('/customers/:id', CustomerController.delete);//eliminar cliente
router.put('/customers/:id', CustomerController.edit);//editar cliente
router.post('/customers', CustomerController.createCustomer);//crear cliente
router.get('/customers/:id/accounts', AccountController.listAccoutsByCustomer);//listar cuentas de un cliente
router.post('/accounts', AccountController.createAccount);//crear cuenta
router.delete('/accounts/:id', AccountController.deleteAccount);//eliminar cuenta

module.exports = router;