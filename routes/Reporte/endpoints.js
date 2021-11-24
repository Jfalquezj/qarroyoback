const router = require('express').Router({ caseSensitive: true, strict: true });
const controller = require('./controller');

router.get('/:id', controller.getReporte);
router.get('/', controller.getAllReportes);
router.post('/create', controller.createReporte);

module.exports = router;
