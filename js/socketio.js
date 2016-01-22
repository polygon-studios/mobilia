var socket = io.connect('http://45.55.90.100');

socket.on('news', function (data) {
  console.log(data);
  socket.emit('beep');
});

socket.on('Position', function (data) {
  console.log(data);
});

socket.on('beep', function (data) {
  console.log('BEEP');
});
