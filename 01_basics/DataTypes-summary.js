//   ==>  primitives 

//   7 types : (String, Number, Boolean, null, undefined, Symbol, Bigint)

//   ==>  Non-primitives (References)

//   3 types : (Array, Objects, Functions)



//   <--- JavaScript is a Dynamically typed language ---> 


// const score = 100
// const scoreValue = 100.3

// const inloggedIn = false
// const outsideTemp =null

// const Id = Symbol('123')
// const anotherId = Symbol('123')


// console.log(Id == anotherId);
// console.log(Id === anotherId);

// console.log(typeof (Id));
// console.log(typeof (anotherId));
// console.log(typeof (123));
// console.log(typeof ('123'));

// const bigNumber = 34234234234234234n


// // array

// const heros = ["Aman", "Shaktiman", "BatMan"];
// let myObj = {
//     name: "AmanGupata",
//     age: 21,
// }

// const myFunction = function(){
//     console.log("Hey sup?");
// }

// console.log(myFunction);

// console.log(typeof (bigNumber));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// Stack(primitive), Heap(non primitive)


let myName = "Aman"
let anothername = myName
anothername = "AmanGupta"

console.log(myName);
console.log(anothername);



let userOne = {
    email: "user@email.com",
    UPI: "coco@ybl.com"
}

let userTwo = userOne

userTwo.email = "new@mail.com"
userTwo.UPI = "koko@sbi.com"

console.log("The Email of user one is: " + userOne.email + " And the UPI id is: " + userOne.UPI);
console.log("The Email of user two is: " + userTwo.email + " And the UPI id is: " + userTwo.UPI);