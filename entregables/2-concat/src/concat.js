var array1 = ['Elemento1', 'Elemento2', 'Elemento3'];
var array2 = ['Elemento4', 'Elemento5', 'Elemento6'];
var array3 = ['Elemento7', 'Elemento8', 'Elemento9'];

// CONCAT
const concat = (a, b) => {
    var c = [];
    c.push(...a);
    c.push(...b);
    return c;
};

var arraySalida = concat(array1, array2);
console.log(arraySalida);

// CONCAT CON MULTIPLES ARRAYS
const concat2 = (...todos) => {
    var arrayTodos = [];
    todos.forEach(function(element) {
        arrayTodos.push(...element);
    });
    return arrayTodos;
};
var arraySalida = concat2(array1, array2, array3);
console.log(arraySalida)