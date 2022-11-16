const express = require('express');
require('express-async-errors');
const methodOverride = require("method-override");
const {engine} = require("express-handlebars");
const {handlebarsHelpers} = require("./utils/handlebar-helpers");
const {homeRouter} = require("./routers/home");
const {childRouter} = require("./routers/child");
const {giftRouter} = require("./routers/gift");
const {handleError} = require("./utils/error");
require('./utils/db');


const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    express: true,
}));
app.use(express.static('public'));
// app.use(express.json());    //Content-type: application/json

app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/child', childRouter);
app.use('/gift', giftRouter);

app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('Server is ON and running on http://localhost:3000')
})