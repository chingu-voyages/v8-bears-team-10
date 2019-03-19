const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {});

router.post('/', async function(req, res, next) {
	//fake auth
	res.status(200).json({ auth: true });
});

module.exports = router;
