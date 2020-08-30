const express = require('express')
const router = express.Router();
const LogController = require('./controllers/LogController')

router.get('/logs/list', LogController.list)
router.post('/logs/list', LogController.list)

module.exports = router