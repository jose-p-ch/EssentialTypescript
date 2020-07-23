function calculateTax(amount, discount?) {
  return (amount * 1.2) - (discount || 0);
}

let taxValue = calculateTax(100, 0);
console.log(`discount 0: ${taxValue}`);

taxValue = calculateTax(100)
console.log(`discount undefined: ${taxValue}`);

taxValue = calculateTax(100, 10)
console.log(`discount 10: ${taxValue}`);