const {Router} = require('express');
const {ValidationError} = require("../utils/error");
const {GiftRecord} = require("../records/gift.record");


const giftRouter = Router();

giftRouter                 //all paths will begin from child
    .get('/', async (req, res) => {
        const giftsList = await GiftRecord.listAll();

        res.render('gifts/gifts-list', {
            giftsList,
        });
    })

    .post('/', async (req, res) => {
        const data = {
            ...req.body,
            count: Number(req.body.count),
        };

        const newGift = new GiftRecord(data);
        await newGift.insert();

       res.redirect('/gift')
    })




module.exports = {
    giftRouter,
}