interface Person {
  name: string;
  getDetails(): string;
}

interface Product {
  name: string;
  price: number;
}

class Employee implements Person {
  constructor(public name: string, public company: string) {}

  getDetails() {
    return `${this.name} works for ${this.company}`;
  }
}

class Sportsproduct implements Product {
  constructor(
    public name: string,
    public category: string,
    public price: number
  ) {}
}

class ProductGroup {
  constructor(...initialProducts: [string,Product][]){
    initialProducts.forEach(p => this[p[0]] =p[1]);
  }

  [property: string]: Product;
}

let group = new ProductGroup(["shoes", new Sportsproduct("Shoes", "Running", 90.50)]);
group.hat = new Sportsproduct("Hat", "Skiing", 20);
Object.keys(group).forEach(k => console.log(`Property Name: ${k}`));