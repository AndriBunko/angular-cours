import {Category} from "./enums";
import {Book, Librarian} from "./interfaces";
import {Encyclopedia, ReferenceItem, UniversityLibrarian} from './classes/index';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

console.log('Hi');
//  ------------------------------------------------

// Task 01, 02

// Task #1.1
function getAllBooks(): Book[] {
    let books = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript
        },
        {
            id: 3,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
            category: Category.CSS
        },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript
        }
    ];

    return books;
}

// Task #1.2
function logFirstAvailable(books: any[]): void {
    console.log(`Length of books : ${books.length}`);

    for (const book of books) {
        if (book.available) {
            console.log('Title of first book : ' + book.title);
            break;
        }
    }
}
// Task #1.3
// logFirstAvailable(getAllBooks());

// Task #2.3
function getBookTitlesByCategory(category: Category): Array<string> {
    let titles: Array<string> = [];

    for (const book of getAllBooks()) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }

    return titles;
}

// Task #2.4
function logBookTitles(titles: Array<string>): void {
    titles.forEach(element => console.log(element));
}

// logBookTitles(getBookTitlesByCategory(Category.CSS));

// Task 03
function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}.`);
}

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: reason => console.log(`Damaged: ${reason}`)
};

printBook(myBook);
myBook.markDamaged('missing back cover');

// Task 04


const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Andrey');

// Task 05

// const ref = new ReferenceItem('My Title', 2018);
// ref.printItem();
// ref.publisher = 'Boris';
// console.log(ref.publisher);

// Task 06

const refBook = new Encyclopedia('My Title', 2018, 100);
refBook.printItem();
