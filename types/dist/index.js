"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")];
let products = [new dataTypes_1.Product("Running Shoes", 100),
    new dataTypes_1.Product("Hat", 25)];
let cities = [new dataTypes_1.City("London", 8136000),
    new dataTypes_1.City("Paris", 2141000)];
let employees = [new dataTypes_1.Employee("Bob Smith", "Sales"),
    new dataTypes_1.Employee("Alice Jones", "Sales")];
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    collate(targetData, itemProp, targetProp) {
        let results = [];
        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}
class SearchableCollection extends DataCollection {
    constructor(initialitems) {
        super(initialitems);
    }
    find(name) {
        return this.items.find(item => item.name === name);
    }
}
let peopleData = new SearchableCollection(people);
let foundPerson = peopleData.find("Bob Smith");
if (foundPerson !== undefined) {
    console.log(`${foundPerson.name}, ${foundPerson.city}`);
}
