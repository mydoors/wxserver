var {handler} =require('./Protocol/Msghandler')
var {wsserver}=require('./Websocket/Index')
var Koa =require('koa')
var bodyParser =require("koa-bodyparser")
var {router} =require('./Router/Index')

const PORT = 8000;


const app = new Koa();
app.use(bodyParser());



app.use(router.routes());
app.use(router.allowedMethods());


app.listen(PORT);





