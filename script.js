// //Assign 'hcot' to schoolName. display the var in console //

// // --------------------Assignment-------------------------------//

// //---------------------No: 1 ----------------------------------//

// // Define a variable called 'name'
// let name;
// console.log(name);
// // This gives an output: undefined

// // Assigning a value to the variable 'name'
// name = "Alice";

// // Display the variable in the console again
// console.log(name); 
// // This will output: Alice

// // Define another variable without assigning a value
// let age;
// console.log(age); 
// // This gives an output: undefined



// // --------------------Assignment-------------------------------//

// //---------------------No: 2 ----------------------------------//

// // Assign 'hcot' to the variable 'schoolName'
// let schoolName = 'hcot';

// // Display the variable in the console
// console.log(schoolName); 
// // This gives an output: hcot


// // --------------------Assignment-------------------------------//

// //---------------------No: 3 ----------------------------------//

// // Defining the variable and assigning it a value 'javascript class'
// let courseName = 'javascript class';

// // Using document.write to display the value of the variable
// document.write(courseName);


// // --------------------Assignment-------------------------------//

// //---------------------No: 3 ----------------------------------//

// // Define the variable 'testScope' and assign it the value 100.00
// let testScope = 100.00;

// // Using console.log to display the value of the variable in the console
// console.log(testScope);
// // Result is: 100 without the decimal
function add(a, b) {
    return a + b;
}

console.log(add(3, 5)); 


function even(integer) {
    return integer % 2 === 0;
}

console.log(even(4));  // Output: true
console.log(even(7));  // Output: false


function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0));  // Output: 32
console.log(celsiusToFahrenheit(25)); // Output: 77


function getStringLength(str) {
    return str.length;
}

console.log(getStringLength("Hello"));  // Output: 5
console.log(getStringLength("JavaScript")); // Output: 10


function containsElement(array, element) {
    return array.includes(element);
}

console.log(containsElement([1, 2, 3], 2));  // Output: true
console.log(containsElement([1, 2, 3], 4));  // Output: false