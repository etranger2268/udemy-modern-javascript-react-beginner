/*
  var変数
*/
var val1 = 'var変数';
console.log(val1);

// var変数は上書き可能
val1 = 'var変数を上書き';
console.log(val1);

// var変数は再宣言可能
var val1 = 'var変数を再宣言';
console.log(val1);

/*
  let変数
*/
let val2 = 'let変数';
console.log(val2);

// let変数は上書き可能
val2 = 'let変数を上書き';
console.log(val2);

// let変数は再宣言不可
// let val2 = 'let変数を再宣言';

/*
  const変数
*/
const val3 = 'const変数';
console.log(val3);

// const変数は上書き不可
// val3 = 'const変数を上書き';

// const変数は再宣言不可
// const val3 = 'const変数を再宣言';

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: 'etranger2268',
  age: 26,
};
console.log(val4);

val4.name = 'etranger';
val4.age = 6;
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ['red', 'yellow'];
console.log(val5);

val5[0] = 'blue';
val5.push('green');
console.log(val5);
