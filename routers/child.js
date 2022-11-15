const {Router} = require('express');
const {ValidationError} = require("../utils/error");



const childRouter =  Router();

childRouter
    .get('/', async (req, res) => {
        res.send('Child')
    })

module.exports = {
    childRouter,
}