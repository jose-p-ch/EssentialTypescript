function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let hat = ["Hat", 100];
let gloves = ["gloves", 75];
let products = [["Hat", 100], ["Gloves", 75]];
let tupleUnion = [true, false, hat, ...products];
tupleUnion.forEach((elem) => {
    if (elem instanceof Array) {
        elem.forEach((tupleElem) => {
            if (typeof tupleElem === "string") {
                console.log(`String value: ${tupleElem}`);
            }
            else {
                console.log(`Number value: ${tupleElem}`);
            }
        });
    }
    else if (typeof elem === "boolean") {
        console.log(`Boolean value: ${elem}`);
    }
});
