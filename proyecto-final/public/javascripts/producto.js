const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const productoEsquema = new esquema({
    id: String,
    nombre: String,
    precio: int,
    stock: int,
    categoria: String
});

module.exports = mongoose.model('estudiantes',productoEsquema);
                                // nombre de la coleccion de la base de datos