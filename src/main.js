const num = 1;
const val1 = num > 0 ? 'trueです' : 'falseです';
console.log(val1);

const val2 = num < 0 ? 'trueです' : 'falseです';
console.log(val2);

const number = 1300;
console.log(number);
console.log(number.toLocaleString());

const formattedNum =
  typeof number === 'number' ? number.toLocaleString() : '数値を入力してください';
console.log(formattedNum);

const checkSum = (num1, num2) => (num1 + num2 > 100 ? '100を超えています' : '許容範囲内です');
console.log(checkSum(60, 50));
console.log(checkSum(50, 50));
