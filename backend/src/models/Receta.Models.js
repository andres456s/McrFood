const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecetaSchema = new Schema({
    Nombre :String,
    Puntuación :String,
    Comentarios :String,
    Tiempo_de_preparación :String,
    Dificultad :String,
    Tipo_de_comida :String,
    Lugar_de_origen :String,
});

module.exports   = mongoose.model("Receta", RecetaSchema);