const router = require('express').Router()
const Resources = require('./resource-model')
const validator = require('../middleware/validator')

router.get('/', async (req, res, next) => {
    try {
        res.json(await Resources.find())
    } catch(err) {
        next(err)
    }
})

router.post('/', validator('name'), async (req, res, next) => {
    try{
        const newResource = await Resources.add(req.body)
            res.status(201).json(newResource)
    } catch(err) {
        next(err)
    }
})

module.exports = router