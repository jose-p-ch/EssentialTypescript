function calculatePrice(quantity, price) {
    return quantity * price;
}
let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);
function getRandomValue() {
    return (Math.floor(Math.random() * 4) + 1);
}
var City;
(function (City) {
    City["London"] = "LON";
    City["Paris"] = "PAR";
    City["Chicago"] = "CHI";
})(City || (City = {}));
function getMixedValue() {
    switch (getRandomValue()) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
            return City.London;
    }
}
console.log(`Value: ${getMixedValue()}`);
