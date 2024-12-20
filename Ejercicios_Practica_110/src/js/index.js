// function isBookRead(books, titleToSearch) {

//   let leido = false;

//   books.forEach(element => {
//     if (element.title === titleToSearch) {
//       leido = element.isRead;
//     }
//   });

//   return leido;
// }

// // Ejemplo:
// var books = [
//   { title: "Harry Potter y la piedra filosofal", isRead: true },
//   { title: "Canción de hielo y fuego", isRead: false },
//   { title: "Devastación", isRead: true },
// ];

// console.log(isBookRead(books, "Devastación")); // true
// console.log(isBookRead(books, "Canción de hielo y fuego")); // false
// console.log(isBookRead(books, "Los Pilares de la Tierra")); // false


function isBookRead(books, titleToSearch) {
  const book = books.find(({ title }) => title === titleToSearch);

  return (book?.isRead) ? book.isRead : false;
}

// Ejemplo:
var books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false