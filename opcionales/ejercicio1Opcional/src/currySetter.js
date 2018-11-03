// --- OPCIONAL ------------------------------------------------------------------------

// Currifica dicha función para que permita crear funciones donde el argumento del nombre de la propiedad
// esté configurado previamente.
// Es decir, modifica la función "set" para poder crear "setName", "setSurname" y "setAge" que reciban sólo
// el objeto y el valor y sepan qué propiedad actualizar.
// Si quieres puedes extraer la firma de la interfaz sin ponerla en línea con la implementación.

const set = propiedad => (objeto, valor) => {
    let objeto2 = Object.assign({}, objeto)
    objeto2[propiedad] = valor;
    return objeto2;
}

const setName = set('name');
const setSurname = set('surname');
const setAge = set('age');

const julia = { name: 'Julia', surname: 'Álvarez', age: 19 };
console.log(setName(julia, 'Ana')); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(julia, 'González')); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }