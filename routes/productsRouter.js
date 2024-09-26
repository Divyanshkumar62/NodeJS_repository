const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hey product")
})

module.exports = router;