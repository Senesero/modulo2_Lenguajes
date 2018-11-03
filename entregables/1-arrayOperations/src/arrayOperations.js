const array = ['Elemento1', 'Elemento2', 'Elemento3', 'Elemento4', 'Elemento5'];

// HEAD Forma 1
console.log('----- HEAD -----');
const head = ([first, ]) => [first];
const firstElement = head(array);
console.log(firstElement);

// HEAD Forma 2
const head2 = (array) => [array[0]];
const firstElement_2 = head2(array);
console.log(firstElement_2);

// Si queremos solo devolver el elemento sin un array, quitaríamos los [] del return
const head3 = ([first, ]) => first;
const firstElement_3 = head3(array);
console.log(firstElement_3);

// TAIL
console.log('----- TAIL -----');
const tail = ([, ...others]) => others;
const resto = tail(array);
console.log(resto);

// INIT
console.log('----- INIT -----');
const init = (array) => array.slice(0, array.length - 1);
const primeros = init(array);
console.log(primeros);

// LAST
console.log('----- LAST -----');
const last = (array) => array.slice(array.length - 1);
const ultimo = last(array);
console.log(ultimo);

const last2 = (array) => array.slice(-1);
const ultimo_2 = last2(array);
console.log(ultimo_2);