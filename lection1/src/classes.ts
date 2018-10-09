import * as Interfaces  from 'interfaces';

class UniversityLibrarian implements Interfaces.Librarian{
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

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

export {UniversityLibrarian, ReferenceItem}
