const router = require('express').Router({ caseSensitive: true, strict: true });
const controller = require('./controller');

router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.get('/:id', controller.getUser);
router.get('/', controller.getAllUsers);
router.patch('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
