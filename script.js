// Copy and paste the code below into your JavaScript file:

"use strict";
  let myGrades = [100, 100, 90, 73, 78, 94, 86];

  let myAverage = 0;

for (let i = 1; i <= myGrades; i++) {

    myAverage += myGrades[i];
}

 myAverage = myAverage / myGrades;
console.log("My grade average is " + myAverage);

// The code above has bugs. Use your debugger to step through the code and find and fix any bugs.


// What bugs did you find?

    //function does not produce a grade average, it give NaN
    //states myGrades and my Average is undefined 

// How did you fix them?
    //changed myGrades and myAverage into variables using let
    //I removed myGrade.length and changed it to myGrades

// Write a function that accepts a number from 0-100.


// Your function should reject input (throw an exception) if:

// The value is not a number
// Is less than 0 
// Is greater than 100

// Once you have that code working, create a new custom exception and throw that instead of a generic exception.
// Once you have that working, write code that handles the exception and then call your function.