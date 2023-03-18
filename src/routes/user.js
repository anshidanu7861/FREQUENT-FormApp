const express = require('express')
const router = express.Router()
const { home, homePost, viewForm } = require('../controller/homeController')

// Home page
router.get('/', home);
router.post('/form', homePost);


// View form datas
router.get('/viewData', viewForm)



module.exports = router;