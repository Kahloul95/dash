let path = require('path');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

mongoose.connect("mongodb://localhost:27017/mama?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
{ useNewUrlParser: true}

);

const exercisesRouter =require('./routes/exercises')
const concoursRouter = require('./routes/concours');
const usersRouter = require('./routes/users');
const mossRouter = require('./routes/moss');
const friendsRouter = require('./routes/friends');
const authRouter = require('./routes/auth')
const adminRouter = require('./routes/admin')
const newsRouter = require('./routes/news');
const articlesRouter = require('./routes/article');
const countryRouter = require('./routes/country');
const municipalityRouter = require('./routes/municipality');
const adressRouter = require('./routes/adress');


app.use('/auth', authRouter);
app.use('/admins', adminRouter);
app.use('/concours', concoursRouter);
app.use('/exercises', exercisesRouter);
app.use('/users',usersRouter);
app.use('/moss', mossRouter);
app.use('/friends', friendsRouter);
app.use('/news',newsRouter);
app.use('/articles',articlesRouter);
app.use('/country',countryRouter);
app.use('/municipality',municipalityRouter);
app.use('/adress',adressRouter);


app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});

