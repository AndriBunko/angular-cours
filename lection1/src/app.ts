showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 1
logFirstAvailable(getAllbooks())

function getAllbooks(): Array<Book> {
    let books: Array<any> = [
        {id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        {id: 2,title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript},
        {id: 3,title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
        {id: 4,title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript}
    ];
    return books;
}

function logFirstAvailable(books: Array<Book>): void {
    for (let book of books) {
        if (book.available === true) {
            console.log(book.title);
            break;
        }
    }
    console.log(books.length);
}

//Task2
const enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular
}

function getBookTitlesByCategory(category: Category): Array<string> {
    let books = getAllbooks();
    let titles: string[] = [];
    for (let book of  books) {
        if (book.category === category)
            titles.push(book.title);
    }
    return titles;
}

console.log(getBookTitlesByCategory(Category.JavaScript));

//Task 3
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages: number;

    markDamaged?(reason: string): void;
}

function printBook(book: Book) {
    console.log(book.title + ' by ' + book.author)
}

let myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: reason => console.log(`Damaged: ${reason}`)
};

printBook(myBook)

myBook.markDamaged('missing back cover')

