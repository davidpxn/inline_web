function emitGetTicket(socket, phone, callback) {
  const event = '/ticket/cGetTicket';

  socket.emit(event, { phone }, (data) => {
    callback(data);
  });
}


export {
  emitGetTicket,
};
