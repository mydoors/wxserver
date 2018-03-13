const Router=require('koa-router')
const graphqlKoa=require('apollo-server-koa')
const graphiqlKoa=require('apollo-server-koa')
const {schema}=require('../Graphql/Schema')



const router = new Router();

router.get('/', async (ctx,next) => {
    ctx.body = 'Hello2 World!';
});



router.post('/graphql', graphqlKoa.graphqlKoa({ schema: schema }));
router.get('/graphql', graphqlKoa.graphqlKoa({ schema: schema }));


router.get('/graphiql', graphqlKoa.graphiqlKoa({
    endpointURL: '/graphql' // a POST endpoint that GraphiQL will make the actual requests to
}));



module.exports={

    router
}

