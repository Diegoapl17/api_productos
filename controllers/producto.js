const {response} = require('express');

//importacion de los metodos 
const Producto = require('../models/productos');



//consultar para obtener los usuarios en una variable de tipo asincrona 
const productoGet  = async (req, res = response) => {
    // const {nombre} = req.query//desecstructuracion

    //consultar todos los uduarios
    const productos = await Producto.find(); //esto nos da una respuesta

    //convierte los usuarios en json 
    res.json({
        productos
    })
}


const productoPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    try {
        const producto = new Producto(body) //Instanciando el objeto
        await producto.save() //Inserta en la colección
        res.json(producto);
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

//Juan Sebastián Granada

//Modifcación
const productoPut = async(req, res = response) => {

    const {idProducto,  nombre,  precioCompra, precioVenta,  cantidad, stockMinimo, estado, stockMaximo } = req.body
    let mensaje = 'Modificación exitosa'
    try{
         await Producto.updateMany({idProducto: idProducto}, 
            { $set: { nombre: nombre, precioCompra: precioCompra, precioVenta:precioVenta, estado:estado, cantidad: cantidad, stockMinimo: stockMinimo, stockMaximo: stockMaximo }})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}

//Eliminación
const productoDelete = async(req, res) => {

    const {_id} = req.body
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        await Producto.deleteOne({_id: _id})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    productoGet,
    productoPost,
    productoPut,
    productoDelete
}
