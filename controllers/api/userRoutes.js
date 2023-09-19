const router = require("express").Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll()
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id)
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err.message)
    }
 })

module.exports = router