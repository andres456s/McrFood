const RecetaCrl={}
const Receta = require("../models/Receta.models");
//funcion crear persona
RecetaCrl.crearReceta = async (req,res) => {
    
    

    const{Nombre,Puntuación,Comentarios,Tiempo_de_preparación,Dificultad,Tipo_de_comida,Lugar_de_origen}=req.body 

    const NuevaReceta = new Receta({
        Nombre,
        Puntuación,
        Comentarios,
       /* Tiempo_de_preparación,
        Dificultad,
        Tipo_de_comida,
        Lugar_de_origen,*/
    })
 const respuesta =await NuevaReceta.save()
    res.json({
        mensaje:'Bienvenido',
        id:NuevaReceta.Nombre,
    
    })
    
  };

  module.exports= RecetaCrl