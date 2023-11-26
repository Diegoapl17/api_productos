const express = require('express');
require('dotenv').config()//importar paquete 
const Server = require('./models/server')

const server = new Server()//instanciar el objeto

server.app.use(express.json());

// Ruta para recibir peticiones por nombre de usuario
server.app.get('/:id', productoGetId); 

const productoGetId =  async (req, res) => {
 
const { idProducto } = req.params; 

try {
    const usuarioID = await ProductoSchema.findById(idProducto);

    if (!usuarioID) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json({ usuarioID });
} catch (error) {
    console.error('Error al buscar usuario por ID:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
}

};

server.listen()//escuchar las peticiones del servidor para saber si funciona Servidor local iniciarlo

