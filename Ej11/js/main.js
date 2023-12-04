var Persona = {
    nombre:"Juan Carlos",
    apellidos: "Escobar",
    edad: "21", 
    dirección: "Riera d'Aragó", 
    ciudad: "Reus", 
    país: "España"
};
const nomApels = (Persona) => {
    let [nombre, apellido] = [Persona.nombre, Persona.apellidos];
    console.log(nombre + " " + apellido);
} 
nomApels(Persona);