showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

console.log('Hi');
//  ------------------------------------------------

// Task 01, 02
enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: (reason: string) => void;
}

interface Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer: (custName: string) => void;
}

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
class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Andrey');

// Task 05
class ReferenceItem {
    //   title: string;
    //   year: number;

    //   constructor(newTitle: string, newYear: number) {
    //     console.log(`Creating a new ReferenceItem...`);
    //     this.title = newTitle;
    //     this.year = newYear;
    //   }

    private _publisher: string;

    static department = 'IT';

    constructor(public title: string, protected year: number) {
        console.log(`Creating a new ReferenceItem...`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }
}

// const ref = new ReferenceItem('My Title', 2018);
// ref.printItem();
// ref.publisher = 'Boris';
// console.log(ref.publisher);

// Task 06
class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    printItem() {
        super.printItem();
        console.log(`Edition: edition (${this.year})`);
    }
}

const refBook = new Encyclopedia('My Title', 2018, 100);
refBook.printItem();