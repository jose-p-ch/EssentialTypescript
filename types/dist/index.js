function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let hatprice = 100;
let glovesPrice = 75;
let umbrellaPrice = 42;
writePrice("Hat", hatprice);
writePrice("Gloves", glovesPrice);
writePrice("Umbrella", umbrellaPrice);
