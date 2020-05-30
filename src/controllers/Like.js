const Dev = require('../models/Dev')

module.exports = {
	async store(req, res) {
		const { dev_id } = req.params
		const { user } = req.headers

		const loggedDev = await Dev.findById(user)
		const targetDev = await Dev.findById(dev_id)

		if (!targetDev) {
			return res.status(400).json({ error: 'Dev not exist' })
		}

		return res.json({ ok: true })
	}
}