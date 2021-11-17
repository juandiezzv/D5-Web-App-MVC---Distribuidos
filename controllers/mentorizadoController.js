const nodemailer = require('nodemailer');
const Mentorizado = require('../model/Mentorizado')


//Mostrar
module.exports.mostrar = (req, res) => {
  Mentorizado.find({}, (error, mentorizados) => {
    if (error) {
      return res.status(500).json({
        message: 'Error mostrando los mentorizados'
      })
    }
    return res.render('index', { mentorizados: mentorizados })
  })
}



//Crear
module.exports.crear = (req, res) => {
  //console.log(req.body)
  const mentorizado = new Mentorizado({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    dni: req.body.dni,
    codigo: req.body.codigo,
    email: req.body.email
  })

  contentHTML = `
        <h1>Factura</h1>
        <ul>
            <li>Nombre:${mentorizado.nombre}</li>
            <li>Apellidos: ${mentorizado.apellido}</li>
            <li>Email: ${mentorizado.email}</li>
        </ul>
        <p></p>
    `;

  let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'juniortapiacruz@gmail.com',
            pass: 'yhvfxlttkewkqura'
        }
    });

  transporter.sendMail({
        from: '"Mentorizado" <grupo8@grupo8.com>', // sender address,
        to: mentorizado.email,
        subject: 'Mensaje de bienvenida !!',
        // text: 'Hello World'
        html: contentHTML
    });
    

  mentorizado.save(function (error, mentorizado) {
    if (error) {
      return res.status(500).json({
        message: 'Error al crear el Mentorizado'
      })
    }
    res.redirect('/')
  })
}

//Editar
module.exports.editar = (req, res) => {
  const id = req.body.id_editar
  const nombre = req.body.nombre_editar
  const apellido = req.body.apellido_editar
  const dni = req.body.dni_editar
  const codigo = req.body.codigo_editar
  const email = req.body.email_editar
  Mentorizado.findByIdAndUpdate(id, { nombre, apellido, dni, codigo, email }, (error, mentorizado) => {
    if (error) {
      return res.status(500).json({
        message: 'Error actualizando el Mentorizado'
      })
    }
    res.redirect('/')
  })
}

//Borrar
module.exports.borrar = (req, res) => {
  const id = req.params.id
  Mentorizado.findByIdAndDelete(id, (error, mentorizado) => {
    if (error) {
      return res.status(500).json({
        message: 'Error eliminando el Mentorizado'
      })
    }
    res.redirect('/')
  })
}