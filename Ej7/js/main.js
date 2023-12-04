let array = [];
const rellenarArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random()*100);
    }
}
const mostrarArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
const mostrarMayor5 = (array) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 5){
            console.log(array[i]);
        }
    }
}
array.length = 10;
rellenarArray(array);
console.log("Array sin filtro");
mostrarArray(array);
console.log("Array con sólo mayores de 5");
mostrarMayor5(array);

