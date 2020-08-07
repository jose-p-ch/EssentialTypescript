class Person {
  constructor(public id: string, public name: string, public city: string){}

  writePers(): void {
    console.log(`${this.id} ${this.name}, ${this.city}`)
  }
};

class Employee extends Person{

  constructor(public readonly id: string, public name: string, private dept: string, public city: string) {
    super(id, name, city);
  }

  writeDept(): void {
    console.log(`${this.name} works in ${this.dept}`);
  }
}

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");

let data: (Person | Employee)[] = [
  new Person("bsmith", "Bob Smith", "London"),
  new Person("ajonse", "Alice Jones", "Paris"),
  new Person("dpeters", "Dora Peters", "New York"),
  salesEmployee,
];

data.forEach((item) => {
  if (item instanceof Employee) {
    item.writeDept();
  } else {
    item.writePers();
  }
});
