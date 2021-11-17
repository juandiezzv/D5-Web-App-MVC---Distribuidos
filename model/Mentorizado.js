const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mentorizadoSchema = new Schema ({
    nombre: String,
    apellido: String,
    dni: String,
    codigo: String,
    email: String

}, {versionKey:false})
module.exports = mongoose.model('mentorizados', mentorizadoSchema)