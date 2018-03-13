import casual from 'casual';

const mocks = {
    String: () => 'It works!',
    Query: () => ({
        author: (root, args) => {
            return { firstName: args.firstName, lastName: args.lastName };
        },
    }),
    Author: () => ({ firstName: () => casual.first_name, lastName: () => casual.last_name }),
    Post: () => ({ title: casual.title, text: casual.sentences(3) }),
};
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
export default mocks;
