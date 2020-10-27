const {Router} = require('express')
const Card = require('../models/card')
const Course = require('../models/course')
const router = Router()

router.post('/add', async (req, res) => {
    const course = await Course.getById(req.body.uuid) 
    console.log('uuid router', req.body.uuid)
    await Card.add(course)
    res.redirect('/card')
})

router.get('/', async (req, res) => {

    const card = await Card.fetch()
    
    const cardIdx = card.map(c => c.cardcourses)

    const cardsOrder = await Promise.all(cardIdx.map(element => Course.getById(element)));
    console.log('cardOrder', cardsOrder)

    res.render('card', {
        title: 'Card',
        isCourses: true, 
        cardsOrder
    })
})

module.exports = router