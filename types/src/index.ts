function calculateTax(
  amount: number | null,
  discount: number = 0,
  ...extraFees: number[]
) {
  if (amount != null) {
    return (
      amount * 1.2 - discount + extraFees.reduce((total, val) => total + val, 0)
    );
  } else {
    return undefined;
  }
}

let taxValue = calculateTax(100, 0);
console.log(`discount 0: ${taxValue}`);

taxValue = calculateTax(100);
console.log(`discount undefined: ${taxValue}`);

taxValue = calculateTax(100, 10, 20);
console.log(`discount 10, extra 10: ${taxValue}`);

taxValue = calculateTax(100, 10, 20, 1, 30, 7);
console.log(`discount 10, extra 10,20,1,30,7: ${taxValue}`);

taxValue = calculateTax(null, 0);
console.log(`null input: ${taxValue}`);
