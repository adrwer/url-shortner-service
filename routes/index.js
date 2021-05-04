const express = require('express')
const router = express.Router()

const Url = require('../models/Url')

// @route   GET /:code
// @desc    Redirects to long/original url
router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code })

        if (url) {
            return res.redirect(url.longUrl)
        } else {
            res.status(404).json('No url found')
        }
    } catch (error) {
        console.error(error)
        res.status(500).json('Server Error')
    }
})

module.exports = router