const express = require('express');
require('dotenv').config()//importar paquete 
const Server = require('./models/server')

const server = new Server()//instanciar el objeto

server.app.use(express.json());

// Ruta para recibir peticiones por nombre de usuario
Server.app.get('/api/usuario/:nombre', (req, res) => {
  const nombreUsuario = req.params.nombre;

  // Aquí puedes realizar alguna lógica para obtener información del usuario
  // Puedes acceder a la base de datos u otro sistema para obtener la información
  const informacionUsuario = {
    nombre: nombreUsuario,
    // Otros datos del usuario...
  };

  res.json(informacionUsuario);
});

server.listen()//escuchar las peticiones del servidor para saber si funciona Servidor local iniciarlo

