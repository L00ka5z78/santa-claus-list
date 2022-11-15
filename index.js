const express = require('express');
const methodOverride = require("method-override");
const {engine} = require("express-handlebars");
const {handlebarsHelpers} = require("./utils/handlebar-helpers");
const {homeRouter} = require("./routers/home");
const {childRouter} = require("./routers/child");
const {giftRouter} = require("./routers/gift");
const {handleError} = require("./utils/error");



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


app.get('/child', (req, res) => {
    res.render('children/children-list')
})


// app.use('/child', childRouter);
// app.use('/gift', giftRouter);

app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('Server is ON and running on http://localhost:3000')
})