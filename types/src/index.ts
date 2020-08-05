type Person = {
  id: string;
  name: string;
  city: string;
};

type Employee = {
  id: string;
  company: string;
  dept: string;
};

type EmployedPerson = Person & Employee;

function correlatedData(
  peopleData: Person[],
  staff: Employee[]
): EmployedPerson[] {
  const defaults = { company: "None", dept: "None" };
  return peopleData.map((p) => ({
    ...p,
    ...(staff.find((e) => e.id === p.id) || { ...defaults, id: p.id }),
  }));
}

let people: Person[] = [
  { id: "bsmith", name: "Bob Smith", city: "London" },
  { id: "ajones", name: "Alice Jones", city: "Paris" },
  { id: "dpeters", name: "Dora Peters", city: "New York" },
];

let employees: Employee[] = [
  { id: "bsmith", company: "Acme Co", dept: "Sales" },
  { id: "dpeters", company: "Acme Co", dept: "Development" },
];

let dataItems: EmployedPerson[] = correlatedData(people, employees);

function writePerson(per: Person): void {
  console.log(`Person: ${per.id}, ${per.name}, ${per.city}`);
}

function writeEmployee(emp: Employee): void {
  console.log(`Employee: ${emp.id}, ${emp.company}, ${emp.dept}`);
}

dataItems.forEach((item) => {
  writePerson(item);
  writeEmployee(item);
});
