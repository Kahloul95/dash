const router = require('express').Router();
let Mos = require('../models/mos.model');
router.route('/').get((req,res)=> {
    Mos.find()
    .then(moss => res.json(moss))
    .catch((err) => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const fullname =req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const address =req.body.address;
    const newMos = new Mos({username, fullname, email, password, phone, address});
    newMos.save()
    .then(()=> res.json('Mos added'))
    .catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').get((req,res)=> {
    Mos.findById(req.params.id)
    .then(mos => res.json(mos))
    .catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').delete((req,res)=> {
    Mos.findByIdAndDelete(req.params.id)
    .then(mos => res.json('Mos deleted'))
    .catch(err => res.status(400).json('Error: '+err));
});
router.route('/update/:id').post((req,res)=> {
    Mos.findById(req.params.id)
    .then(mos => {
    mos.username = req.body.username;
    mos.fullname =req.body.fullname;
    mos.email = req.body.email;
    mos.password = req.body.password;
    mos.phone = req.body.phone;
    mos.address =req.body.address;
    mos.save()
    .then(()=> res.json('Exercice updated !'))
    .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});
module.exports = router;