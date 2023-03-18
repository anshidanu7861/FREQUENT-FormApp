const userModel = require('../models/userModels')
let Country = require('country-state-city').Country;
let State = require('country-state-city').State;
let City = require('country-state-city').City;

let countryData = Country.getAllCountries()
let stateData = State.getAllStates()
let cityData = City.getAllCities()



module.exports.home =async (req, res) => {
    res.render('form', { countryData, stateData, cityData })
}

module.exports.viewForm =async (req, res) => {
    const data = await userModel.find()
    res.render('viewForm', { data })
}

module.exports.homePost =  (req, res) => {
    try{
        console.log(req.body);
        const { firstname, lastname, email, country, state, city, gender, date_of_birth, age } = req.body;
         userModel.create({firstname, lastname, email, country, state, city, gender, date_of_birth, age})
         res.json({status: true})
    }catch (err) {
        console.log(err.message);
    }
  
}
 
 