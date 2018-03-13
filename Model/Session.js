const  {getUserInfo}= require('./User')
const  {mongoose}=require('./MongooseDB')
const {AES}=require('../Utils/AES')
const sessionstore = mongoose.model('SessionStore', {
    js_code: String,
    openid:String,
    sessionid:String,
    session_key:String
});

async function Userfindone(id){
    let openid=await sessionstore.findOne({openid:id})
    return openid
}

const LoginAction= async (msg) =>{



    let res = await getUserInfo(msg.info.logincode)

    let sessionid=AES.encrypt(res.data.session_key)

    let openid=await Userfindone(res.data.openid)
    if (openid) {
        console.log("exist the same record:"+openid)
    }else {
        const sessioninfo = new sessionstore({
            js_code: msg.info.logincode,
            openid:res.data.openid,
            sessionid: sessionid,


        })
        sessioninfo.save().then(() => console.log('meow'));
    }
    var responsemsg = {
        id:1,
        jscode: msg.info.logincode,
        openid:res.data.openid,
        type:'response',
        sessionid: sessionid,


    }
    return responsemsg

}

module.exports={
    LoginAction
}
