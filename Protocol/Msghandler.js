const  {LoginAction} =require('../Model/Session')


async function handler(msg) {

    try {
        if (msg.id === 1) {
            return LoginAction(msg)
        }

    }catch(e){
        console.log(e)
    }
    return "succeed"
}



module.exports= {
    handler,


}
