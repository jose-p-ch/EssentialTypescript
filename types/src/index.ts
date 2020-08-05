type Person = {
  id: string;
  name: string;
  city: string;
  contact: { phone: number };
};

type Employee = {
  id: string;
  company: string;
  dept: string;
  contact: { name: string };
};

type EmployedPerson = Person & Employee;

let typeTest = ({} as EmployedPerson).contact;

let person1: EmployedPerson = {
  id: "bsmith",
  name: "Bob Smith",
  city: "London",
  company: "Acme Co",
  dept: "Sales",
  contact: { name: "Alice", phone: 65123456543 },
};

let person2: EmployedPerson = {
  id: "dpeters",
  name: "Dora Peters",
  city: "New York",
  company: "Acme Co",
  dept: "Development",
  contact: { name: "Alice", phone: 65123456543 },
};
