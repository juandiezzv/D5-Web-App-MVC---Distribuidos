const mongoose = require('mongoose')
const url = 'mongodb+srv://junior:junior123@dinamica5grupo8.l4goe.mongodb.net/dinamica5grupo8?retryWrites=true&w=majority'
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'))
db.once('open', function callback() {
    console.log("¡Conectado a MongoDB!")
})
module.exports = db