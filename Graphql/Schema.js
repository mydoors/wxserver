const { makeExecutableSchema } = require('graphql-tools');
const {resolvers}=require('./Resolver')


const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String,reviewrank:Int }
`;




const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports={

    schema
}
