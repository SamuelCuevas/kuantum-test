const { Router } = require('express');
const { getDevices, postDevice } = require('../controllers/device');
const router = Router();

router.get('/', getDevices );

router.post('/new', postDevice );


module.exports = router;