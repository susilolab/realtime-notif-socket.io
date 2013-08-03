var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)

app.listen(3000);

function handler(req, res) {}

io.sockets.on('connection', function(socket) {
	socket.on('message', function(msg) {
		//socket.emit('message', {message: msg});
		// Broadcast pesan ke semua client yg terhubung
		socket.broadcast.emit('message', msg);
	});

	// saat ada berita baru ditambah
	socket.on('article_added', function(msg) {
		// Broadcast pesan ke semua client yg terhubung
		socket.broadcast.emit('article_added', msg);
	});


	// saat ada lowongan baru ditambah
	socket.on('vacancy_added', function(msg) {
		//socket.emit('message', {message: msg});
		// Broadcast pesan ke semua client yg terhubung
		socket.broadcast.emit('vacancy_added', msg);
	});

	// saat ada yg apply lowongan  	
	socket.on('vacancy_applied', function(msg) {
		//socket.emit('message', {message: msg});
		// Broadcast pesan ke semua client yg terhubung
		socket.broadcast.emit('vacancy_applied', msg);
	});  
});