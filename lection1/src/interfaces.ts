import {Category} from "./enums";

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

export {Book, Librarian}