const {handler} = require("../Protocol/Msghandler")
const {SendMessage} = require('./SendMsg')

const WebSocket = require('ws');



var wsserver=new WebSocket.Server({
    host:"127.0.0.1",
    port:8080
})

wsserver.on('connection',function(ws){
    ws.on("error", (err) => {
            console.log("Caught  wsserver socket error: ")
            console.log(err.stack)
        }
    )
    ws.on('message',async function(message){
        console.log(message)
        var msg=JSON.parse(message)
        let response=await handler(msg)
        let rsp=SendMessage(ws,response)

    })
})
console.log('Websocket server running...')


module.exports={
wsserver
}
