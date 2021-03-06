const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
]

const isBookRead = (array, titulo) => {
    let leido = false;
    array.forEach((element) => {
        if (element.title === titulo && element.isRead === true) {
            leido = true;
        }
    });
    return leido;
}

console.log(isBookRead(books, 'Devastación'));
console.log(isBookRead(books, 'Canción de hielo y fuego'));
console.log(isBookRead(books, 'Los Pilares de la Tierra'));