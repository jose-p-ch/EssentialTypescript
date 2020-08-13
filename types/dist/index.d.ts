interface Person {
    name: string;
    getDetails(): string;
}
interface Product {
    name: string;
    price: number;
}
declare class Employee implements Person {
    name: string;
    company: string;
    constructor(name: string, company: string);
    getDetails(): string;
}
declare class Sportsproduct implements Product {
    name: string;
    category: string;
    price: number;
    constructor(name: string, category: string, price: number);
}
declare class ProductGroup {
    constructor(...initialProducts: [string, Product][]);
    [property: string]: Product;
}
declare let group: ProductGroup;
