declare class Person {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
    writePers(): void;
}
declare class Employee extends Person {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare let salesEmployee: Employee;
declare let data: (Person | Employee)[];
