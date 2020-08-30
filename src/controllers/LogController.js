const log = require('../models/Log')

module.exports = {
    async list(req, res) {
        if(req.body != null){
            const result = await log.find(req.body)
            return res.json(result)
        }
        else {
            const result = await log.find()
            return res.json(result)
        }
    }
}