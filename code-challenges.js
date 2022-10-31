// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
//Create a function named temperature
//Input: Use a number as an argument 
//Logic: Use conditional statements to determine if the argument is either:
    //below the boiling point
    //equal to the boiling point
    //above the boiling point
//Output: The number used as the argument will print whether it is below, at, or above the boiling point in Fahrenheit.

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const temperature =(temp) => {
    if (temp > 212) {
        return `${temp} is above boiling point`
    } else if (temp === 212) {
        return `${temp} is at boiling point`
    } else {
        return `${temp} is below boiling point`
    }
}
console.log(temperature(temp1));
console.log(temperature(temp2));
console.log(temperature(temp3));

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
//Create a variable to combine the two arrays into a new array
//Use a built-in method called .length to determine the length of the new array
//Print the length of the new array

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// let newPadresArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);
// console.log(newPadresArray.length);
const padres = (series1, series2) => {
    let arrayLength = series1.concat(series2)
    return arrayLength.length
}
console.log(padres(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns));

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
//Create a new variable to use the mutator .split() in order to turn the string into an array since strings are immutable in JavaScript
//Create a new variable to reverse the strings inside the new array
//Print the variable you used to reverse the array and use the mutator .join() to change the array into a new string

const currentCohort = "Golf 2022"
// Expected output: "2202 floG"

// let currentCohortArray = currentCohort.split("")
// let reverseCurrentCohort = currentCohortArray.reverse();
// console.log(reverseCurrentCohort.join(""))

const cohort = (cohortName) => {
    let currentCohortArray = cohortName.split("")
    let reverseCurrentCohort = currentCohortArray.reverse()
    return reverseCurrentCohort.join("")
}
console.log(cohort(currentCohort))

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
//Input: given value
//Process: Use the given value variable to reference the myNumbers array and iterate through until the given value matches what is found in the array
//Find the location of the number from the given value
//Print the index of the given value

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const findValue = (value) => {
    return myNumbers.lastIndexOf(value);
}
console.log(findValue(givenValue1));
console.log(findValue(givenValue2));

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
//Input: use the variables as the argument
    //each variable has an unsorted array of numbers
//Process: Normally using .sort() is used for numbers sort in the array from smallest to largest with the argument inside the parentheses being (a, b) => a - b. The values a and b are used to compare two numbers, the comparison continues throughout the array
// But if you want to sort the numbers from largest to smallest, you reverse the values by having the argument (a, b) => b - a

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

const sortTemp = (temps) => {
    return temps.sort((a, b) => b - a);
}
console.log(sortTemp(sanDiegoSummerTemperatures));
console.log(sortTemp(sanDiegoWinterTemperatures));