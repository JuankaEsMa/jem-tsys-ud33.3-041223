let separateCharacters = new RegExp("")
let string = "Hola";
let array = string.split(separateCharacters)

const mostrarArrayInvertida = (array) => {
    for (let i = array.length-1; i >= 0; i--) {
        console.log(array[i]);
    }
}
mostrarArrayInvertida(array);