import { City, Employee, Person, Product } from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100),
new Product("Hat", 25)];
let cities = [new City("London", 8136000),
new City("Paris", 2141000)];
let employees = [new Employee("Bob Smith", "Sales"),
new Employee("Alice Jones", "Sales")];

class DataCollection<T extends { name: string }> {
  protected items: T[] = [];

  constructor(initialItems: T[]){
    this.items.push(...initialItems);
  }

  collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
    let results = [];
    this.items.forEach(item => {
      let match = targetData.find(d => d[targetProp] === item[itemProp]);
      if(match !== undefined){
        results.push({...match, ...item});
      }
    });
    return results;
  }
}

class SearchableCollection extends DataCollection<Employee>{
  constructor(initialitems: Employee[]){
    super(initialitems);
  }

  find(searchTerm: string): Employee[] {
    return this.items.filter(item => 
      item.name === searchTerm || item.role === searchTerm);
  }
}

let employeeData = new SearchableCollection(employees);
employeeData.find("Sales").forEach(e =>
  console.log(`Employee ${ e.name }, ${ e.role }`));