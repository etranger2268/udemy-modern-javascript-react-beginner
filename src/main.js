// 配列の展開
const arr = [1, 2];
console.log(arr);
console.log(...arr);

const sum = (num1, num2) => num1 + num2;
console.log(sum(arr[0], arr[1]));
console.log(sum(...arr));

// まとめる
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [num1, num2, ...nums] = numbers;
console.log(num1);
console.log(num2);
console.log(nums);

// 配列のコピー、結合
const arr1 = [10, 20];
const arr2 = [30, 40];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

arr3[1] = 200;
console.log(arr3);
console.log(arr1);

const arr4 = [...arr1, ...arr2];
console.log(arr4);

const arr5 = arr1;
arr5[0] = 100;
console.log(arr1);
