class Employee {
    constructor(name, company) {
        this.name = name;
        this.company = company;
    }
    getDetails() {
        return `${this.name} works for ${this.company}`;
    }
}
class Sportsproduct {
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
class ProductGroup {
    constructor(...initialProducts) {
        initialProducts.forEach(p => this[p[0]] = p[1]);
    }
}
let group = new ProductGroup(["shoes", new Sportsproduct("Shoes", "Running", 90.50)]);
group.hat = new Sportsproduct("Hat", "Skiing", 20);
Object.keys(group).forEach(k => console.log(`Property Name: ${k}`));
