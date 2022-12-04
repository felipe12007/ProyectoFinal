const express = require("express");
const rutas = express.Router();

// Importar modelo de la base de datos
const Venta = require('../public/javascripts/venta');

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


rutas.put('/venta/:id', async(req,res,next)=>{

    const id = req.params.id;

    res.redirect('/');

});

 
rutas.delete('/detalleVentas/:id',async(req,res,next)=>{
    const id = req.params.id;
    await DetalleVenta.deleteOne({id:id});
    res.redirect('/');
});


rutas.get('/',async(req,res)=>{
  
    const listaDetalleVentas = await DetalleVenta.find();
  
    res.render("hola",{listaDetalleVentas});
});


rutas.get('/ventas/:id',async(req,res)=>{
    const id = req.params.id;
    const ventas = await Ventas.findOne({id:id});
    
    res.render('hola',{ventas});
});


rutas.post('/ventas',async(req,res)=>{
    var e = new Venta(req.body);
    await Venta.insertMany(e);
    res.redirect('/');
},);


module.exports=rutas;

