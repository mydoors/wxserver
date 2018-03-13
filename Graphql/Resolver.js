// The resolvers
const {createUser,listUser}=require("../Model/User")

const resolvers = {
    Query: { users:async () => {
        let userlist=await listUser()
        return userlist
    }
    },
    Mutation:{
        createUser:async (root,args)=>{
            console.log(args)
            let auser=await createUser(args.name,args.age)
            return auser
        }
    }
};
module.exports={
    resolvers
}
