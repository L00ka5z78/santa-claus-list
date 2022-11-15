const {Router} = require('express');
const {ValidationError} = require("../utils/error");



const homeRouter =  Router();

homeRouter
    .get('/', (req, res) => {
    res.redirect('/child')
});


module.exports = {
    homeRouter,
}