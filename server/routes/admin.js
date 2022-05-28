const Admin = require('../models/admin');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

const router = require('express').Router();

router.put("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    if (res.body.password) {
        req.body.password= CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true}
        );
        res.status(200).json(updatedAdmin);
    } catch (error) {
        res.status(500).json(error)
        
    }
});
//delete
router.delete('/:id', verifyTokenAndAuthorization, async (req,res)=>{
    try {
        await Admin.findByIdAndDelete(req.params.id)
        res.status(200).json('Admin has been deleted...')
    } catch (error) {
        res.status(500).json(error)
    }
});
// GET admin
router.get('/find/:id', verifyTokenAndAdmin, async (req,res)=>{
    try {
        const Admin = await Admin.findById(req.params.id);
        const { password, ...others } = Admin._doc
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;