const New = require('../models/news.model');

const router = require('express').Router();

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});


const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png' ,'image/pdf'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

router.route('/').get(async (req,res)=> {
    const query = req.query.new;
    try {
        const news = query
        ? await New.find()
        :await New.find();
        res.status(200).json(news);
        
    } catch (err) {
        res.status(500).json(err)
    }
});

/*router.route('/add').post( async (req,res)=> {
    const newNew = new New(req.body);

    try {
        const savedNew = await newNew.save();
        res.status(200).json(savedNew);
    } catch (error) {
        res.status(500).json(err);
        console.log(err)
        
    }
})
*/
router.route('/add').post(upload.single('img'), (req, res) => {
    
    const title = req.body.title;
    const type = req.body.type;
    const img = req.file.filename;
    const desc = req.body.desc;
    const gender = req.body.gender;
    const country = req.body.country;
    const munici = req.body.munici;
    const lat = req.body.lat;
    const lng = req.body.lng;
    const date = req.body.date

    const newNewsData = {
        title,
        type,
        img,
        desc,
        gender,
        country,
        munici,
        lat,
        lng,
        date
    }

    const newNews = new New(newNewsData);

    newNews.save()
           .then(() => res.json('news Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/image:id').get(upload.single('img'), async (req,res)=>{
    try {
        
        const news = await New.findById(req.params.id);
        
        res.status(200).json(news)
    } catch (err) {
        res.status(500).json(err)
    }
});
router.route('/:id').get (async (req,res)=>{
    try {
        
        const news = await New.findById(req.params.id);
        
        res.status(200).json(news)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.route('/:id').delete(async (req,res)=>{
    try {
        await New.findByIdAndDelete(req.params.id)
        res.status(200).json('new deleted')
    } catch (err) {
        res.status(500).json(err)
    }
});

router.route('/update/:id').post(async (req,res)=>{
    try {
        
        const updateNew = await New.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
                
            },
            {new : true}
        );
        res.status(200).json(updateNew)
    } catch (err) {
        res.status(500).json(err);

    }
})

module.exports = router;