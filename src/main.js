// Object
const myProfileObj = {
  name: 'etranger2268',
  age: 26,
};

const message1 = `名前は${myProfileObj.name}です。年齢は${myProfileObj.age}です。`;
console.log(message1);

const { name: nameObj, age: ageObj } = myProfileObj;
const message2 = `名前は${nameObj}です。年齢は${ageObj}です。`;
console.log(message2);

// Array
const myProfileArr = ['etranger2268', 26];

const message3 = `名前は${myProfileArr[0]}です。年齢は${myProfileArr[1]}です。`;
console.log(message3);

const [nameArr, ageArr] = myProfileArr;
const message4 = `名前は${nameArr}です。年齢は${ageArr}です。`;
console.log(message4);
