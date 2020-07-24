function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hatprice = 100;
let glovesPrice = 75;
let umbrellaPrice = 42;

writePrice("Hat", hatprice);
writePrice("Gloves", glovesPrice);
writePrice("Umbrella", umbrellaPrice);