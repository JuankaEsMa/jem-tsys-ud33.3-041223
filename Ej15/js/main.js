class Receta {
    constructor(nombre, ingredientes, tiempoDePreparacion) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.tiempoDePreparacion = tiempoDePreparacion;
    }
}
arrayRecetas = [];

arrayRecetas.push(new Receta("Croquetas de pollo",["Pollo","Bechamel","Pan rallado"],"12h"));
arrayRecetas.push(new Receta("Estofado de ternera",["Ternera","Agua","cebolla", "zanahoria"],"4h"));
arrayRecetas.push(new Receta("Bozcocho de limón",["Levadura","Huevo","limón rallado", "Harina"],"3h"));

let getNombreIngredientesTiempo = (Receta) => {
    console.log("Nombre: " + Receta.nombre);
    console.log("Tiempo De Preparacion: " + Receta.tiempoDePreparacion);
    console.log("Ingredientes: " + Receta.ingredientes);
    console.log("-----------------------")
}
for (let i = 0; i < arrayRecetas.length; i++) {
    getNombreIngredientesTiempo(arrayRecetas[i]);
}
