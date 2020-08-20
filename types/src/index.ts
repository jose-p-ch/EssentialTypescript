import { City, Employee, Person, Product } from "./dataTypes";

type shapeType = { name: string };

interface Collection<T extends shapeType> {
  add(...newItems: T[]): void;
  get(name: string): T;
  count: number;
}

interface SearchableCollection<T extends shapeType> extends Collection<T> {
  find(name: string): T | undefined;
}

interface ProductCollection extends Collection<Product> {
  sumPrices(): number;
}

interface PeopleCollection<T extends Person | Employee> extends Collection<T> {
  getNames(): string[];
}