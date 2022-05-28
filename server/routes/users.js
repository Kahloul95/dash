const router = require('express').Router();
let User = require('../models/user.model');


router.route('/').get( async (req,res) => {
const query = req.query.new;
try {
    const users = query
    ? await User.find()
    :await User.find();
    res.status(200).json(users);

} catch (err) {
    res.status(500).json(err)
}
});


router.route('/add').post( async (req,res) => {

const newUser = new User(req.body);

try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
} catch (err) {
    res.status(500).json(err);
    console.log(err)
}

});

router.route('/:id').get( async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
        
    } catch (err) {
        res.status(500).json(err)     
    }

});

router.route('/:id').delete( async (req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user deleted")
    } catch (err) {
        res.status(500).json(err)
    }
    
});


router.route('/update/:id').post(async (req,res) => {
    try {
        const updateUser  = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updateUser);
        
        return;
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
    
    });
module.exports = router;