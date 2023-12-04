let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
const cambiarString = (array,string, replacement) => array[array.indexOf(string)] = replacement
const mostrarArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
const copiarLastIndexes = (array, contador) => {
    let arrayCopiada = [];
    for (let i = array.length -1; 0 < contador ; i--, contador--) {
        arrayCopiada.push(array[i]); 
    }
    return arrayCopiada
}
console.log("javascript1: ")
cambiarString(javascript1, "DOM", "Objetos");
cambiarString(javascript1, "Arrays", "ArraysDificiles");
mostrarArray(javascript1);
console.log("array copiada: ")
let arrayCopia = copiarLastIndexes(javascript1, 2);
mostrarArray(arrayCopia);
console.log("Index de Funciones en javascript1: ")
console.log(javascript1.indexOf("Funciones"));



