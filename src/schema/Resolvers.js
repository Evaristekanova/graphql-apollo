const { users } = require("../data");
const resolvers = {
  Query: {
    getAllUsers: () => users,

    getSingleUser: (_, args) => {
      const user = users.find((user) => user.id === args.id);
      return user;
    },
  },
    Mutation: {
        createUser: (_, args) => { 
            const newUser = {
                id: users.length + 1,
                name: args.name,
                email: args.email,
            };
            users.push(newUser);
            return newUser;
        },
        updateUser: (_, args) => { 
            const user = users.find((user) => user.id === args.id);
            user.name = args.name || user.name;
            user.email = args.email || user.email;
            return user;
        },
        deleteUser: (_, args) => { 
            const user = users.find((user) => user.id === args.id);
            users.splice(users.indexOf(user), 1);
            return user;
        }
  },
};
module.exports = { resolvers };
