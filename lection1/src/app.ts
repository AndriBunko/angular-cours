showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

logFirstAvailable(getAllbooks())

function getAllbooks(): Array<any> {
    const books: Array<any> = [
        {title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
        {title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false},
        {title: 'CSS Secrets', author: 'Lea Verou', available: true},
        {title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true}
    ];

    return books;
}

function logFirstAvailable(books: Array<any>): void {
    for (let book of books) {
        if (book.available === true) {
            console.log(book.title);
            break;
        }
    }
    console.log(books.length);
}