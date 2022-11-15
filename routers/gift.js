
const {Router} = require('express');
const {ValidationError} = require("../utils/error");



const giftRouter =  Router();

giftRouter
    .get('/', async (req, res) => {
        res.send('Gift')
    })

module.exports = {
    giftRouter,
}