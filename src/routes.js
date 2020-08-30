const express = require('express')
const router = express.Router();
const LogController = require('./controllers/LogController')

router.get('/list', LogController.list)
router.post('/list', LogController.list)

module.exports = router