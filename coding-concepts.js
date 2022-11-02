// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The .length built-in method measures the length of the string. Even though a string is zero indexed, the counting of each character still starts at one.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: When there is a bracket in front of the variable, it is indicating which the index is located at. Since a string is zero indexed, you have to count one more than the character inside of the square brackets (4) .

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: When there are square brackets with a character inside in front of a variable, it would print the location of the index. Normally the value inside of the square brackets are either a number or the variable "i",  the number itself (index 1) is represented by the variable "index". Knowing that the index is actually one, we can reference the array from the variable languages would print the string "Ruby".

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: error
// b) Verify and explain: The reason that .toUpperCase() will not work is because it is a built-in method for strings, not arrays. Even though the array has strings inside of it, the text editor only sees that data as part of an array. Therefore, when printing weekendDays.toUpperCase() it will produce an error.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: The .length built-in method will produce the number that represents the amount of data inside an array or string. In this case the amount of data stored in the array is four. Adding on top of number amount of the array, typeof finds out what the primitive data type is. This means that the primitive data type of four is a number.

