var Persona = {
    nombre:"Juan Carlos",
    apellidos: "Escobar",
    edad: "21", 
    dirección: "Riera d'Aragó", 
    ciudad: "Reus", 
    país: "España"
};
const nomApels = (Persona) => console.log(Persona.nombre + " " + Persona.apellidos);
nomApels(Persona);