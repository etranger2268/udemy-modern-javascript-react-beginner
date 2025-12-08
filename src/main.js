// truthy, falsyについて
// 'ABC', 0, 10, undefined, null, false, NaN, '', [], {}
const checkTruthy = (arg) => (arg ? 'truthy' : 'falsy');
console.log(`'ABC': ${checkTruthy('ABC')}`);
console.log(`0: ${checkTruthy(0)}`);
console.log(`10: ${checkTruthy(10)}`);
console.log(`undefined: ${checkTruthy(undefined)}`);
console.log(`null: ${checkTruthy(null)}`);
console.log(`false: ${checkTruthy(false)}`);
console.log(`NaN: ${checkTruthy(NaN)}`);
console.log(`'': ${checkTruthy('')}`);
console.log(`[]: ${checkTruthy([])}`);
console.log(`{}: ${checkTruthy({})}`);

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) console.log('flag1かflag2はtrueになります');
if (flag1 && flag2) console.log('flag1とflag2はtrueになります');

// || は左側がtruthの時、その時点で返却する
const num1 = null;
const fee1 = num1 || '金額未設定です';
console.log(fee1);

const num2 = 100;
const fee2 = num2 || '金額未設定です';
console.log(fee2);

// && は左側がfalsyの時、その時点で返却する
const num3 = undefined;
const fee3 = num3 && '何か設定されました';
console.log(fee3);

const num4 = 100;
const fee4 = num4 && '何か設定されました';
console.log(fee4);
