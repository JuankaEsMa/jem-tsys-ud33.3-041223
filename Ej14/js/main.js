let arrayRecetas = [];
let Croquetas = {
    nombre: "Croquetas de pollo",
    ingredientes: ["Pollo","Bechamel","Pan rallado"],
    tiempoDePreparacion: "12h"
};
let Estofado = {
    nombre: "Estofado de ternera",
    ingredientes: ["Ternera","Agua","cebolla", "zanahoria"],
    tiempoDePreparacion: "4h"
};
let Bizcocho = {
    nombre: "Bozcocho de limón",
    ingredientes: ["Levadura","Huevo","limón rallado", "Harina"],
    tiempoDePreparacion: "3h"
};
arrayRecetas.push(Croquetas, Estofado, Bizcocho);

let getNombreIngredientesTiempo = (Croquetas) => {
    console.log("Nombre: " + Croquetas.nombre);
    console.log("Tiempo De Preparacion: " + Croquetas.tiempoDePreparacion);
    console.log("Ingredientes: " + Croquetas.ingredientes);
    console.log("-----------------------")
}
for (let i = 0; i < arrayRecetas.length; i++) {
    getNombreIngredientesTiempo( arrayRecetas[i]);
}
