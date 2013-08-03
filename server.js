var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)

app.listen(3000);

function handler(req, res) {}

io.sockets.on('connection', function(socket) {
  socket.on('message', function(msg) {
    //socket.emit('message', {message: msg});
    socket.broadcast.emit('message', msg);
    // console.log(msg);
  });
});