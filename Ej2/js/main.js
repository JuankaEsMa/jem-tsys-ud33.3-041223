let array = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"]
const mostrarArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] + " -> posicion: " + i); 
    }
}
mostrarArray(array);