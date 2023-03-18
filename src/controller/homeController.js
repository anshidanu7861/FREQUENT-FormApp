const { rawListeners } = require('..')
const userModel = require('../models/userModels')


module.exports.home = (req, res) => {
    res.render('form')
}

module.exports.viewForm =async (req, res) => {
    const data = await userModel.find()
    res.render('viewForm', {data})
}

module.exports.homePost = async (req, res) => {
    try{
        console.log(req.body);
        const { firstname, lastname, email, country, state, city, gender, date_of_birth, age} = req.body;
         userModel.create({firstname, lastname, email, country, state, city, gender, date_of_birth, age})
         res.json({status: true})
    }catch (err) {
        console.log(err.message);
    }
  
}
 
 