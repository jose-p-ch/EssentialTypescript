let person = {
    id: "bsmith",
    name: "Bob Smith",
    city: "London",
    company: "Acme Co",
    dept: "Sales",
    getContact(field) {
        return typeof field === "string" ? "Alice" : 65123456543;
    }
};
let typeTest = person.getContact;
let stringParamTypeTest = person.getContact("Alice");
let numberParamTypeTest = person.getContact(123);
console.log(`Contact: ${person.getContact("Alice")}`);
console.log(`Contact: ${person.getContact(123)}`);
