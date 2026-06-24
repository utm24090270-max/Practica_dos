import { Schema, model } from "mongoose";

const tabla = new Schema({
    Edad_usuario: String,
    Género_usuario: String,
    Tiempo_de_uso_diario: Number,
    Tipo_dispositivo: String,
    Género_película: String,
    Duración_película: String,
    Calificación_otorgada: Number,
    Vio_completa: Boolean
});

export const Tabla = model("Tabla_Pelicula", tabla);
