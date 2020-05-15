const router = require('express').Router()
const Projects = require('./project-model')
const validator = require('../middleware/validator')

const taskRouter = require('../tasks/task-router')

router.use('/:id/tasks', taskRouter)

router.get('/', async (req, res, next) => {
    try {
        res.json(await Projects.find())
    } catch(err) {
        next(err)
    }
})

router.post('/',validator('name'), async (req, res, next) => {
    try{
        const newProject = await Projects.add(req.body)
            res.status(201).json(newProject)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const { id } = req.params
        const project = await Projects.findById(id)
        if(project) {
            res.json(project)
        } else {
            res.status(404).json({ message: 'Could not find project by that ID'})
        }
    } catch(err) {
        next(err)
    }
})

module.exports = router