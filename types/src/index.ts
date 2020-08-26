import { City, Person, Employee, Product } from "./dataTypes";
 
type unionOfTypeNames<T, U> = {
  [P in keyof T] : T[P] extends U ? P : never;
}

type propertyOfType<T, U> = unionOfTypeNames<T, U>[keyof T];

function total<T, P extends propertyOfType<T, number>>(data: T[], propName: P): number {
  return data.reduce((t, item) => t += Number(item[propName]), 0);
}

let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
console.log(`Total: ${total(products, "price")}`);