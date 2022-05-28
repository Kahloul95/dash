const router = require('express').Router();
const Admin = require('../models/admin');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//Register
router.post('/register', async (req, res)=> {
    
    const newAdmin = new Admin({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password, process.env.PASS_SEC
            ).toString(),
    });

    try {
        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin)
    } catch (error) {
        res.status(500).json(error);
    }
});

// LOGIN
router.post("/login", async (req,res) => {
    try {
        const admin = await Admin.findOne({ username: req.body.username });
        !admin && res.status(401).json('Wrong Credentials!')

        const hashedPassword = CryptoJS.AES.decrypt(admin.password,
             process.env.PASS_SEC) 
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        Originalpassword !== req.body.password && 
            res.status(401).json('Wrong credentials!');
            const accessToken = jwt.sign({
                id: admin._id,
                isAdmin: admin.isAdmin,
            },
                process.env.JWT_SEC,
                {expiresIn: '3d'}
            )

        const { password, ...others } = admin._doc
        res.status(200).json({...others, accessToken})

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;