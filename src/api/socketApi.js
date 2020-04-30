function emitGetTicket(socket, phone, callback) {
  const event = '/ticket/cGetTicket';

  socket.emit(event, { phone }, (data) => {
    callback(data);
  });
}


function listenNewCall(callback) {
  const event = '/ticket/sNewCall';

  return {
    event,
    callback,
  };
}


export {
  emitGetTicket,
  listenNewCall,
};
