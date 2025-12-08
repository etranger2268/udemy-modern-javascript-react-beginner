const sayHello = (name = 'ゲスト') => `こんにちは！${name}さん！`;
console.log(sayHello('etranger2268'));
console.log(sayHello());

const myProfile = {
  age: 26,
};

const { age, name = 'ゲスト' } = myProfile;
console.log(age);
console.log(name);
