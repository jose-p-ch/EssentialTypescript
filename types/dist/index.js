function calculateTax(amount) {
    if (amount != null) {
        return (amount * 1.2);
    }
    return null;
}
function writeValue(label, value) {
    console.log(`${label}: ${value}`);
}
writeValue("Tax value", calculateTax(100));
