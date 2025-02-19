// Premitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 1758927362483278519647586348751n



// Reference (Non Premitive)

// Array, Objects, Functions

const heros = ["krish", "shaktiman"];
let myObj = {
    name: "Aryan",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);



// ************************ Memory ****************************

// Stack (Premitive), Heap (Non Premitive)

let mynickName = "GALACTUS"

let anotherName = mynickName
anotherName = "MCUxGALACTUS"

console.log(mynickName);
console.log(anotherName);

let user1 = {
    email:  "user@exapmle.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "aryan"

console.log(user1.email);
console.log(user2.email);
