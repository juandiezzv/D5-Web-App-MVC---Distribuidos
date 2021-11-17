const express = require('express')
const nodemailer = require('nodemailer');
const router = express.Router()

const mentorizadoController = require('../controllers/mentorizadoController')

//Mostrar todos los alumnos (GET)
router.get('/', mentorizadoController.mostrar)
//Crear alumno (POST)
router.post('/crear', mentorizadoController.crear)
//Editar alumno (POST)
router.post('/editar', mentorizadoController.editar)
//Borrar alumno (GET)
router.get('/borrar/:id', mentorizadoController.borrar)
module.exports = router