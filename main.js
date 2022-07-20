//data types
let name = "Sarah"; //string
let age = 24; //number
let z = null; //null
let y = undefined; //undefined
let isMarried = false; //boolean
let favColor = ["black", "grey", "nude", "coffee", "brown", "cream"]; //array
// console.log(age);
// console.log(name);
// console.log(typeof y);
// console.log(typeof isMarried);

//Strings
let x = "Hello World";
// console.log(x.toUpperCase());
// console.log(x.toLowerCase());
// console.log(x.length);

//concatenation
let m = "I am";
let n = "I go to PWC bootcamp";
let p = "I love to learn JavaScript";

// console.log(m + " " + name + n + "and" + p);
// console.log(`${m} ${name} and ${n} ${p}`);

//logging output
// console.error("This is an error");
// console.warn("This is a warning");

let fruits = ["apple", "banana", "orange"];
fruits.push("grape", "strawberry");

fruits.pop();
fruits.shift();
fruits.unshift("kiwi");
fruits[4] = "blueberries";
// console.log(fruits);

// //object literals
// const person = {
//   firstName: "Sarah",
//   age: 24,
//   hobbies: ["music", "movies", "sports"],
//   height: 5.7,
//   weight: 50,
//   isMarried: false,
//   greeting: function () {
//     console.log("Hello");
//   },
// };
// // console.log(person.height);

// // let someWord = "Adamu";
// // console.log(someWord.split(""));

// // let someArray = ["a", "b", "c", "d", "e", "f"];
// // console.log(someArray.reverse());

// const stringToArray = (string) => {
//   return string.split("").reverse().join("");
// };
// console.log(stringToArray("Sarah"));

// const palindromeChecker = (string) => {
//   let isPalindrome = string.split("").reverse().join("");
//   if (isPalindrome == string) {
//     return `${string} is Palindrome`;
//   } else {
//     return `${string} is not palindrome`;
//   }
// };
// console.log(palindromeChecker("steal"));

const intPalindrome = (num) => {
  let convertToString = num.toString();
  let convertToNumber = convertToString.split("").reverse().join("");

  if (convertToString == convertToNumber) {
    return `${convertToString} is a palindrome`;
  } else {
    return `${convertToString} is not a palindrome`;
  }
};

console.log(intPalindrome(234));
