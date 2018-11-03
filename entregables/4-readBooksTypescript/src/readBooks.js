var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
var isBookRead = function (array, titulo) {
    var leido = false;
    array.forEach(function (element) {
        if (element['title'] === titulo && element['isRead'] === true) {
            leido = true;
        }
    });
    return leido;
};
console.log(isBookRead(books, 'Devastación')); //true
console.log(isBookRead(books, 'Canción de hielo y fuego')); //false
console.log(isBookRead(books, 'Los Pilares de la Tierra')); //false
