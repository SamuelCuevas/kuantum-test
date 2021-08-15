const { Router } = require('express');
const { getAlerts, postAlert, updateAlert, deleteAlert } = require('../controllers/alert');
const router = Router();

router.get('/', getAlerts );

router.post('/new', postAlert );

router.put('/:id', updateAlert );

router.delete('/:id', deleteAlert );

module.exports = router;