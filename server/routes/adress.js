const router = require('express').Router();
let adress = require('../models/adress');


router.route('/').get(async (req,res)=>{
    const query = req.query.new;
    try {
        const adresse = query
        ? await adress.find()
        : await adress.find();
        res.status(200).json(adresse);
    } catch (err) {
        res.status(500).json(err)
    }
})
router.route('/add').post(async (req,res) => {
  const newadresse = new adress(req.body);
  try {
      const savedadresse = await newadresse.save();
      res.status(200).json(savedadresse)
  } catch (err) {
      res.status(500).json(err);
      console.log(err)
  }
})

router.route('/:id').get(async (req,res)=>{
    
    try {
        const adresse = await adress.find();
        res.status(200).json(adresse)
    } catch (err) {
        res.status(500).json(err)
    }
})







module.exports = router;