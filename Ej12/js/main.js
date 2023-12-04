let arrayPersonas = []
let Cliente = {
    nombre: "Marc",
    apellidos: "Pellicer",
    dni: "399785641",
}
let Empleado = {
    nombre: "Ainara",
    apellidos: "Blanco",
    dni: "39978547",
}
let Administrador = {
    nombre: "Juan Carlos",
    apellidos: "Escobar",
    dni: "39976231",
}
arrayPersonas.push(Cliente, Empleado, Administrador);
const sacarVariable = (array,campo) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i][campo]);
    }
}
console.log("NOMBRES");
sacarVariable(arrayPersonas,"nombre");
console.log("-------");
console.log("APELLIDOS");
sacarVariable(arrayPersonas,"apellidos");
console.log("-------");
console.log("DNI");
sacarVariable(arrayPersonas,"dni");
console.log("-------");