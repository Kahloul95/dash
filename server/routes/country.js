const router = require('express').Router();
let Country = require('../models/country');
const Municipality = require('../models/municipality');

router.route('/').get(async (req,res)=>{
    const query = req.query.new;
    try {
      
        const countrys = query
        ? await Country.find()
        : await Country.find();
        res.status(200).json(countrys);
    } catch (err) {
        res.status(500).json(err)
    }
})


router.route('/add').post(async (req,res) => {
  const newCountry = new Country(req.body);
  try {
      const savedCountry = await newCountry.save();
      res.status(200).json(savedCountry)
  } catch (err) {
      res.status(500).json(err);
      console.log(err)
  }
})

router.route('/:id').get(async (req,res)=>{
    
    try {
        const country = await Country.find({country_id: req.params.countryid,});
        res.status(200).json(country)
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;