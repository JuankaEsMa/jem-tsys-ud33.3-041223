let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];
const mirarRepetidos = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        if(array2.indexOf(array1[i]) != -1){
            console.log(array1[i] + " Está repetido");
        }
    }
};
mirarRepetidos(javascript1, javascript2);