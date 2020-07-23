function calculateTax(amount, discount = 0, ...extraFees) {
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}
let taxValue = calculateTax(100, 0);
console.log(`discount 0: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`discount undefined: ${taxValue}`);
taxValue = calculateTax(100, 10, 20);
console.log(`discount 10, extra 10: ${taxValue}`);
taxValue = calculateTax(100, 10, 20, 1, 30, 7);
console.log(`discount 10, extra 10,20,1,30,7: ${taxValue}`);
