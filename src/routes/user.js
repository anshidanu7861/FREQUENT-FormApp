const express = require('express')
const router = express.Router()
const { home, viewForm, homePostMethod } = require('../controller/homeController')

// Home page
router.get('/', home);
// Home Post Method
router.post('/form', homePostMethod);


// View form Datas
router.get('/viewData', viewForm)



module.exports = router;