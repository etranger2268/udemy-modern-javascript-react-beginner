const names = ['田中', '山田', 'etranger2268'];
for (let i = 0; i < names.length; i++) console.log(`${i + 1}番目は${names[i]}です`);

const newName = names.map((name, index) => 
  name === 'etranger2268' ? `${index + 1}番目は${name}です` : `${index + 1}番目は${name}さんです`)
console.log(newName);

const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter((num) => num % 2 === 1);
console.log(odds);
