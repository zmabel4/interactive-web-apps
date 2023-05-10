const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

if (hourOfDay === 0 && minuteOfDay === 0) {
  const taxAsDecimal = parseFloat(tax) / 100;
  const startingAfterTax = salary * (1 - taxAsDecimal);
  const balance =  startingAfterTax - transport - food - rent;
  const currency = 'R';
  console.log( currency, balance.toFixed(3) );
  
}