const { Router } = require('express');
const { getAlerts, postAlert, deleteAlert } = require('../controllers/alert');
const router = Router();

router.get('/', getAlerts );

router.post('/new', postAlert );

router.delete('/:id', deleteAlert );

module.exports = router;