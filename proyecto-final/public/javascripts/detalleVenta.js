const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const detalleVentaEsquema = new esquema({
    id: String,
    cantidad: Number,
    precio: Number,
    importe: Number
});

module.exports = mongoose.model('detalleVentaEsquema',detalleVentaEsquema);
                                // nombre de la coleccion de la base de datos

