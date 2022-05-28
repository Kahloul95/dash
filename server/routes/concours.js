const router = require('express').Router();
let Concour = require('../models/concour.model');
router.route('/').get((req,res)=> {
    Concour.find()
    .then(concours => res.json(concours))
    .catch((err)=> res.status(400).json('Error: ' +err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newConcour = new Concour({username,description,duration, date});
    newConcour.save()
    .then(()=> res.json('Concour added'))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res)=> {
    Concour.findById(req.params.id)
    .then(concour => res.json(concour))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res)=>{
    Concour.findByIdAndDelete(req.params.id)
    .then(concour => res.json('Concour deleted'))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res)=>{
    Concour.findById(req.params.id)
    .then(concour => {
        concour.username = req.body.username;
        concour.description = req.body.description;
        concour.duration = Number(req.body.duration);
        concour.date = Date.parse(req.body.date);
        concour.save()
        .then(()=> res.json('Concour update! '))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});
module.exports = router;