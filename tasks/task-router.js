const express = require('express')
const Tasks = require('./task-model')
const validator = require('../middleware/validator')

const router = express.Router({
    mergeParams:true
})

router.get('/', async (req, res, next) => {
    try {
        const { id } = req.params
        const tasks = await Tasks.find(id)
        if(tasks) {
            res.json(tasks)
        } else {
            res.status(404).json({ message: 'Could not find task for given id'})
        }
    } catch(err) {
        next(err)
    }
})

router.post('/', validator('description'),validator('project_id'), async (req, res, next) => {
    try{
        const newTask = await Tasks.add(req.body)
            res.status(201).json(newTask)
    } catch(err) {
        next(err)
    }
})

module.exports = router