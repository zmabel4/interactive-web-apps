const salary = 4000;
const lodging = 'apartment';
const size = 'large';

const expenses = {
  food: 51.7501,
  transport: 10.2,
};

const tax = {
  913: '12%',
};

const rent = {
  'apartment-large': 800,
  'room-large': 300,
};

const taxAsDecimal = parseFloat(tax['913']) / 100;
const startingAfterTax = salary * (1 - taxAsDecimal);
const type = lodging + '-' + size;
const balance = startingAfterTax - expenses.transport - expenses.food - rent[type];
const currency = 'R'
console.log(currency, balance.toFixed(2));






