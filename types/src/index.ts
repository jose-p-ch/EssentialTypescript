import { City, Person, Employee, Product } from "./dataTypes";
 
type resultType<T extends boolean> = T extends true ? string: number;

let firstVal: resultType<true> = "String Value";
let secondVal: resultType<false> = 100;

type references = "London" | "Bob" | "Kayak";
type nestedType<T extends references> = T extends "London" ? City: T extends "Bob" ? Person : Product;

let firstNest : nestedType<"London"> = new City("London", 8136000);
let secondNest: nestedType<"Bob"> = new Person("Bob", "London");
let thirdNest: nestedType<"Kayak"> = new Product("Kayak", 275);
//let mismatchCheck: resultType<false> = "String Value";