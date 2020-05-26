if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys.prod')
} else {
  module.exports = require('./keys.dev')
}

// module.exports = {
//   mongoURI: 'mongodb+srv://IgorSushko1:JsuHRa4JP2HSNyC@cluster0-hxgwz.mongodb.net/test?retryWrites=true&w=majority',
//   jwt: 'dev-jwt' // jwt ключ для шифрования
// }