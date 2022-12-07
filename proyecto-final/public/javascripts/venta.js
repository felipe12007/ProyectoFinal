const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const VentaEsquema = new esquema({
    id: String,
    detalleVenta: [Object],
    fecha: Date,
    total: Number,
    
});

module.exports = mongoose.model('VentaEsquema',VentaEsquema);
                                // nombre de la coleccion de la base de datos
