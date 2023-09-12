const {Router} = require('express')//desecstructuracion extraer un atributo de un objeto 

const route = Router()

//importar metodos del controlador
const {productoGet, productoPost, productoPut, productoDelete} = require('../controllers/producto')

route.get('/', productoGet)
route.post('/', productoPost)
route.put('/', productoPut)
route.delete('/', productoDelete)

module.exports = route