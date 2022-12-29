const router = require("express").Router();
const controllers = require("../Controllers/controllers");

router.get('/users',controllers.getUsers);
router.get('/users/:id', controllers.getUserById);
router.post('/users', controllers.saveUser);
router.patch('/users/:id', controllers.updateUser);
router.delete('/users/:id', controllers.deleteUser);
module.exports = router;
