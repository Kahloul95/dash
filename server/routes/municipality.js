const router = require('express').Router();
let Municipality = require('../models/municipality');
let Country = require('../models/country');

router.route('/').get(async (req,res)=>{
    const query = req.query.new;
    
    try {
        const municipalitys = query
        ? await Municipality.find()
        : await Municipality.find();
        res.status(200).json(municipalitys);
    } catch (err) {
        res.status(500).json(err)
    }
    
})
router.route('/add').post(async (req,res) => {
    const newMunicipality = new Municipality(req.body);
    try {
        const savedMunicipality = await newMunicipality.save();
        res.status(200).json(savedMunicipality)
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
})


router.route(`/states/:id`).get( async (req,res,) => {
   const  ID = req.params.id;
   //res.status(200).json({id: ID})

    try {
        
        const municipality = await Municipality.find({Country: ID})
        res.status(200).json(municipality)
        
    } catch (err) {
        res.status(500).json(err)     
    }

});


router.route('/:id').get( async (req,res) => {
    try {
        const municipality = await Municipality.findById(req.params.id)
        res.status(200).json(municipality)
        
    } catch (err) {
        res.status(500).json(err)     
    }

});


module.exports = router;