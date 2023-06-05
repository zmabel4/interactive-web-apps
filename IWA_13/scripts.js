let state = 'idle';
let user = null;
let calculated = '1';

// Intro to Fuctions 

const logCalc = () => { 
  const isString = typeof calculated === 'string';
  const calculatedAsNumber = isString ? parseFloat(calculated) : calculated;
  calculated = calculatedAsNumber + 1;
};

const calcUser = () => {
  logCalc();
  const calculatedAsNumber = typeof calculated === 'string' ? parseFloat(calculated) : calculated;
  if (calculatedAsNumber > 2) user = 'John';
  if (calculatedAsNumber > 2) state = 'requesting';
  if (calculatedAsNumber > 3) state = 'idle';
};

const checkUser = () => {
  if (user && state === 'requesting') {
    console.log(`User: ${user} (${calculated})`);
  }
};

// Intro to fuctions

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
