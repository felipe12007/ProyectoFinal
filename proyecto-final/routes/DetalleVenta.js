const express = require("express");
const rutas = express.Router();

// Importar modelo de la base de datos
const DetalleVenta = require('../public/javascripts/detalleVenta');

// Funcion middleware

rutas.use((req,res,next)=>{

    if (req.query._method=='PUT'){
        req.method='PUT';
        req.url= req.path;
    }else if (req.query._method=='DELETE'){
        req.method='DELETE';
        req.url= req.path;    
    }
    
    next();
});



rutas.put('/detalleVenta/:id', async(req,res,next)=>{

    const id = req.params.id;

    const buscarDetalleVenta = await DetalleVenta.findOne({id:id});
    
    await Venta.updateOne({id:id},{$set: {aprobado:false}});
    
    res.redirect('/');

});


rutas.delete('/ventas/:id',async(req,res,next)=>{
    const id = req.params.id;
    await Venta.deleteOne({id:id});
    res.redirect('/');
});


rutas.get('/',async(req,res)=>{
    const listaVentas = await Venta.find();

    res.render("hola",{listaDetalleVentas});
});

rutas.get('/DetalleVenta/:id',async(req,res)=>{
    const id = req.params.id;
    const detalleVenta = await DetalleVenta.findOne({id:id});
    
    res.render('hola',{detalleVenta});
});


rutas.post('/detalleVentas',async(req,res)=>{
    var e = new Venta(req.body);
    await DetalleVenta.insertMany(e);
    res.redirect('/');
},);


module.exports=rutas;
