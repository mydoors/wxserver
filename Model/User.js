const axios = require('axios')
const  {mongoose}=require('./MongooseDB')
async function getUserInfo(code) {
    try {
        const response = await axios.get('https://api.weixin.qq.com/sns/jscode2session',
            {
                params: {
                    appid: 'wx78310fab6fddd577',
                    secret:'487afcaf2cbd202ddc2ded28e7d6e0cb',
                    js_code:code

                }
            })

        return response

    } catch (error) {
        console.error(error);
    }
}
var userSchema = new mongoose.Schema({
  name:String,
  age:Number
})

var User = mongoose.model('User',userSchema)

async function createUser(name,age){
    let newUser=new User({name:name,age:age})
    newUser.save((err)=>{
        if(err){
            throw "error:create failed"
            console.log(err)
        }
    })
    return newUser
}

async function listUser() {
    let users=User.find()
    return users

}

module.exports={
    getUserInfo,
    createUser,
    listUser
}
