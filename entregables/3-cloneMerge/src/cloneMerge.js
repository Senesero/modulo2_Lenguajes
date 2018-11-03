// CLONE
const clone = (source, target) => Object.assign(target || {}, source);

const persona = {
    nombre: 'Pablo',
    apellido: 'Rodríguez',
};

const persona2 = clone(persona);
console.log(persona);
console.log(persona2);
console.log('Objetos iguales:', persona === persona2);

// MERGE
const merge = (source, target) => clone(source, target);

const direccion = {
    nombre: 'Juan',
    direccion: 'Calle sin nombre',
    numero: '8',
}

const resultado = merge(persona, direccion);
console.log(resultado);