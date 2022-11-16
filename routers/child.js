const {Router} = require('express');
const {ValidationError} = require("../utils/error");
const {ChildRecord} = require("../records/child.record");
const {GiftRecord} = require("../records/gift.record");


const childRouter = Router();

childRouter                 //all paths will begin from child
    .get('/', async (req, res) => {
        const childrenList = await ChildRecord.listAll();
        const giftsList = await GiftRecord.listAll();


        res.render('children/children-list', {
            childrenList,
            giftsList,
        })
    })


    .post('/', async (req, res) => {
        const newChild = new ChildRecord(req.body);
        await newChild.insert();

        res.redirect('/child')
    })
    //problem przy patchu moze uzyj puta?
    .patch('/gift/:childId', async (req, res) => {
        const child = await ChildRecord.getOne(req.params.childId);  //params pobiera parametr ze sciezki

        if (child === null) {
            throw new ValidationError('Could not find a child with given ID')
        }
        const gift = req.body.giftId === '' ? null : await GiftRecord.getOne(req.body.giftId);
        if(gift) {
            if(gift.count <= await gift.countGivenGifts()) {
                throw new ValidationError('There is to little of this gift')

            }
        }

        child.giftId = gift === null ? null : gift.id;
        await child.update();

        res.redirect('/child')

    })

module.exports = {
    childRouter,
}