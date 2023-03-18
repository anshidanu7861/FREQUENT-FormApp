const express = require('express')
const router = express.Router()
const { home, viewForm, homePost } = require('../controller/homeController')

// Home page
router.get('/', home);
// Home Post Method
router.post('/form', homePost);


// View form Datas
router.get('/viewData', viewForm)



module.exports = router;