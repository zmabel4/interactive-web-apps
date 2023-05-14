const leoName = 'Leo';
const leoSurname = 'Musvaire';
const leoBalance = '9394';
const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = '5582.20';

const divider = '----------------------------------';

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance) ;
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${parseFloat(leoBalance).toFixed(2)})`;
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${parseFloat(sarahBalance).toFixed(2)})`;
const total = 'Total amount owed: ';
const result = `${leo}\n${sarah}\n\n${divider}\n\n${total}R ${owed.toFixed(2)}\n\n${divider} `;

console.log(result );