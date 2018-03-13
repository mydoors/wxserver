function SendMessage(ws,msg) {
    let response= ws.send(JSON.stringify(msg))
}

module.exports={
    SendMessage
}
