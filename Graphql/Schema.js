const { makeExecutableSchema } = require('graphql-tools');
const {resolvers}=require('./Resolver')


const typeDefs = `
  type Query { users: [User] }
  type Mutation{
    createUser(name:String,age:Int):User
  }
  type User { name: String, age:Int}
`




const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports={

    schema
}
