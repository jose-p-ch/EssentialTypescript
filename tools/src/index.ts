import { sum } from "./calc";

let printMessage = (msg: String): void => console.log(`Message: ${ msg }`);

let message = ("Hello, TypeScript");
printMessage(message);

debugger;

let total = sum(100, 200, 300);
console.log(`Total: ${total}`)