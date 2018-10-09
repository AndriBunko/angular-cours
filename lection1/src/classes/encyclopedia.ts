import {ReferenceItem} from "../classes";

export class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    printItem() {
        super.printItem();
        console.log(`Edition: edition (${this.year})`);
    }
}
