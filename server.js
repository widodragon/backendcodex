var restify = require('restify');
var db=require('./config/index.js');
const app = require('./routes/route');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
var connect=db.uri; 
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

connect
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.applyRoutes(server, '/api/v1');

server.listen(db.port, function () {
  console.log('your url :'+db.hostname+'/'+db.port);
});