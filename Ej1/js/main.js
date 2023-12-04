let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const mostrarLongitud = (array) => console.log(array.length);
const sacarRandomValue = (array) => console.log(array[Math.floor(Math.random()*array.length)]);

mostrarLongitud(array);
sacarRandomValue(array);