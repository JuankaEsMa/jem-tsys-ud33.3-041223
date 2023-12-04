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
const separarOddEven = (array) => {
    let arrayPares = [];
    let arrayImpares = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0){
            arrayPares.push(array[i]);
        }else{
            arrayImpares.push(array[i]);
        }
    }
    return [arrayPares, arrayImpares];
}


array.length = 10;
rellenarArray(array);
let arrays = separarOddEven(array);
console.log("Array principal: ");
mostrarArray(array);
console.log("Array Par: ");
mostrarArray(arrays[0]);
console.log("Array Impar: ");
mostrarArray(arrays[1]);
