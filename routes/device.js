const { Router } = require('express');
const { getDevices, postDevice, updateDevice, deleteDevice, getDeviceById } = require('../controllers/device');
const router = Router();

router.get('/', getDevices );

router.get('/:id', getDeviceById );

router.post('/new', postDevice );

router.put('/:id', updateDevice );

router.delete('/:id', deleteDevice );


module.exports = router;