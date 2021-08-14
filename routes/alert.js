const { Router } = require('express');
const { getAlerts } = require('../controllers/alert');
const router = Router();

router.get('/', getAlerts );


module.exports = router;