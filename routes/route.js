const Route = require('restify-router').Router;
const UserController = require('../controllers/userController');
const app = new Route();
const passport = require('passport');
require('../config/passport')(passport);

app.get('/', passport.authenticate('jwt', { session: false}),UserController.index);
app.post('/signup', UserController.create);
app.post('/signin', UserController.signin);
// app.put('/admin/:id', AdminController.update)
// app.del('/admin/:id', AdminController.delete)

module.exports = app