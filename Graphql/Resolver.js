// The resolvers
const books = [
    {
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
        reviewrank:3
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
        reviewrank:5
    },
];
const resolvers = {
    Query: { books: () => books },
};
module.exports={
    resolvers
}
