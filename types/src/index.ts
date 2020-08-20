import { City, Employee, Person, Product } from "./dataTypes";

type shapeType = { name: string };

interface Collection<T extends shapeType> {
  add(...newItems: T[]): void;
  get(name: string): T;
  count: number;
}

class ArrayCollection<DataType extends shapeType> implements Collection<DataType> {
  private items: DataType[] = [];

  add(...newItems): void {
    this.items.push(...newItems);
  }

  get(name: string) {
    return this.items.find(item => item.name === name);
  }

  get count(): number {
    return this.items.length;
  }
}

let peopleCollection: Collection<Person> = new ArrayCollection<Person>();
peopleCollection.add(new Person("Bob Smith", "London"),
  new Person("Dora Peters", "New York"));
console.log(`Collection size: ${peopleCollection.count}`);