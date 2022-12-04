var express = require('express');
var rutas = express.Router();

const Product = require('../public/javascripts/producto');

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


rutas.put('/producto/:id', async(req,res,next)=>{

  const id = req.params.id;
    
  res.redirect('/');

});

rutas.delete('/productos/:id',async(req,res,next)=>{
  const id = req.params.id;
  await Product.deleteOne({id:id});
  res.redirect('/');
});


rutas.get('/',async(req,res)=>{
  
  const listaProductos = await Product.find();
  
  res.render("index",{listaProductos});
});


rutas.get('/productos/:id',async(req,res)=>{
  const id = req.params.id;
  const producto = await Product.findOne({id:id});
  
  res.render('hola',{producto});
});

rutas.post('/Producto',async(req,res)=>{
  var e = new Product(req.body);
  await Product.insertMany(e);
  res.redirect('/');
},);
