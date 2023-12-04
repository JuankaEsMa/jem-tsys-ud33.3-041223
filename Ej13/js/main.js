let Croquetas = {
    nombre: "croquetas de pollo",
    ingredientes: ["Pollo","Bechamel","Pan rallado"],
    tiempoDePreparacion: "12h"
};

let getNombreIngredientesTiempo = (Croquetas) => {
    console.log("Nombre: " + Croquetas.nombre);
    console.log("Tiempo De Preparacion: " + Croquetas.tiempoDePreparacion);
    console.log("Ingredientes: " + Croquetas.ingredientes);
}
getNombreIngredientesTiempo(Croquetas);