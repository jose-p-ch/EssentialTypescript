"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
class ArrayCollection {
    constructor() {
        this.items = [];
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get(name) {
        return this.items.find(item => item.name === name);
    }
    get count() {
        return this.items.length;
    }
}
let peopleCollection = new ArrayCollection();
peopleCollection.add(new dataTypes_1.Person("Bob Smith", "London"), new dataTypes_1.Person("Dora Peters", "New York"));
console.log(`Collection size: ${peopleCollection.count}`);
