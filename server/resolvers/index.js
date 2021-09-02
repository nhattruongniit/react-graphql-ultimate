const data = require('../data');

const resolvers = {
  Query: {
    books: () => data.dataBooks
  }
}

module.exports = resolvers;