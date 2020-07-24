function calculateTax(amount: number): number;
function calculateTax(amount: null): null;
function calculateTax(amount: number | null): number | null {
  if(amount != null){
    return (amount * 1.2)
  }
  return null;
}

function writeValue(label: string, value: number): void {
  console.log(`${label}: ${value}`);
}

writeValue("Tax value", calculateTax(100));