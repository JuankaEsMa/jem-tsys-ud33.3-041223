arrayUno = [1, 2, 3];
arrayDos = [4, 5, 6];
const mezclarArrays = (array1, array2) => {
    let array3 = [];
    while(array1.length > 0){
        array3.push(array1[0]);
        array3.push(array2[0]); 
        array1.shift();
        array2.shift();
    }
    return array3;
}
const mostrarArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
arrayTres = mezclarArrays(arrayUno, arrayDos);
mostrarArray(arrayTres);
console.log("Array 1: ");
console.log(arrayUno);
console.log("Array 2: ");
console.log(arrayDos);