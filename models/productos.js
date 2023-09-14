const {Schema, model} = require('mongoose')

const ProductoSchema = ({
    idProducto:{
        type: Number,
        unique:true
    },
    nombre:{
        type: String,
        required:[true, 'El nombre es obligatorio']
    },
    precioCompra:{
        type: Number,
        required:[true,'El precio de compra es obligatorio'] 
    },
    precioVenta:{
        type:Number,
        required :[true,'El precio de venta es obligatorio'] 
    },
    cantidad:{
        type: Number,
        required:[true,'La cantidad es obligatoria'] 
    },
    stockMinimo:{
        type:Number,
        required :[true,'El stock minimo es obligatorio'] 
    },
    estado:{
        type:String,
        required :[true,'El estado es obligatorio'] 
    },
    stockMaximo:{
        type:Number,
        required :[true,'El stock maximo es obligatorio'] 
    },
    stockMaximoOOO:{
        type:Number,
        required :[true,'El stock22 maximo es obligatorio'] 
    }
})

//Exportar la funcion  UsuariosSchema
module.exports = model ('Producto',ProductoSchema)