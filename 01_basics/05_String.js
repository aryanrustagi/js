const name = "aryan"
const repoCount = 50

// console.log(name + repoCOunt + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('aryan-dev')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(1, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "    Aryan     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://aryan.com/aryan%20rustagi"

console.log(url.replace('%20', '-'));
console.log(url);

console.log(url.includes('nayra'))

console.log(gameName.split('-'));
