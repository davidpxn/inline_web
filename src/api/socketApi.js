function listenEvent(event, callback) {
  return {
    event,
    callback,
  };
}


function emitGetTicket(socket, phone, callback) {
  const event = '/ticket/cGetTicket';

  socket.emit(event, { phone }, (data) => {
    callback(data);
  });
}


function emitCallNext(socket, finishedTicket, callback) {
  const event = '/ticket/cCallNext';

  socket.emit(event, { finishedTicket }, (data) => {
    callback(data);
  });
}


function emitFinishTicket(socket, finishedTicket, callback) {
  const event = '/ticket/cFinishTicket';

  socket.emit(event, { finishedTicket }, (data) => {
    callback(data);
  });
}


function emitSkipTicket(socket, skippedTicket, callback) {
  const event = '/ticket/cSkipTicket';
  
  socket.emit(event, { skippedTicket }, (data) => {
    callback(data);
  });
}


function listenNewCall(callback=null) {
  const event = '/ticket/sNewCall';
  return listenEvent(event, callback);
}


function listenNewTicket(callback=null) {
  const event = '/ticket/sNewTicket';
  return listenEvent(event, callback);
}


function listenFinishedTicket(callback=null) {
  const event = '/ticket/sFinishedTicket';
  return listenEvent(event, callback);
}


function listenSkippedTicket(callback=null) {
  const event = '/ticket/sSkippedTicket';
  return listenEvent(event, callback);
}


export {
  emitGetTicket,
  emitCallNext,
  emitFinishTicket, 
  emitSkipTicket,
  listenNewCall,
  listenNewTicket,
  listenFinishedTicket,
  listenSkippedTicket,
};
