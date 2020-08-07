class Person {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    writePers() {
        console.log(`${this.id} ${this.name}, ${this.city}`);
    }
}
;
class Employee extends Person {
    constructor(id, name, dept, city) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
let data = [
    new Person("bsmith", "Bob Smith", "London"),
    new Person("ajonse", "Alice Jones", "Paris"),
    new Person("dpeters", "Dora Peters", "New York"),
    salesEmployee,
];
data.forEach((item) => {
    if (item instanceof Employee) {
        item.writeDept();
    }
    else {
        item.writePers();
    }
});
