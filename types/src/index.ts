function calculatePrice(quantity: 1 | 2, price: number) {
  return quantity * price;
}

let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);