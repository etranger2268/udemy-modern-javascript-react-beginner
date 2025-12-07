// 従来の関数
function func1(str) {
  return str;
}
console.log(func1('func1です'));

// 関数式
const func2 = function(str) {
  return str;
}
console.log(func2('func2です'));

// アロー関数
const func3 = str => {
  return str;
};
console.log(func3('func3です'));

const func4 = str => str;
console.log(func4('func4です'));

// example
const sum = (num1, num2) => num1 + num2;
console.log(sum(10, 20));

// return object
const createUser = (str, num) => ({ name: str, age: num });
console.log(createUser('etranger2268', 26));
