const Route = require('restify-router').Router;
const UserController = require('../controllers/userController');
const MainController = require('../controllers/mainController');
const app = new Route();
const passport = require('passport');
require('../config/passport')(passport);

app.get('/', passport.authenticate('jwt', { session: false}),UserController.index);
app.post('/signup', UserController.create);
app.get('/regionals',MainController.index);
app.post('/regionals', MainController.create);
app.post('/signin', UserController.signin);
// app.put('/admin/:id', AdminController.update)
// app.del('/admin/:id', AdminController.delete)

module.exports = app