// 1. Write a function that displays current date & time in your
// browser.

function displayCurrentDateTime(){
    var today=new Date();
    return today;
}
document.write(displayCurrentDateTime());



// 2.Write a function that takes first & last name and then it
// greets the user using his full name.

function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    let greeting = "Hello, " + fullName + "!";
    return greeting;
}
document.write(greetUser("John", "Doe!</br>"));

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function addNumbers(a, b) {
    return a + b;
}
let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let result = addNumbers(num1, num2);
document.write("The sum is: " + result);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculator(){
    var num1 = +prompt("Enter the num 1");
    var operator = prompt("Enter the operator i.e +, -, *, /")
    var num2 = +prompt("Enter the num 2");

    if(operator === "+"){
      return  num1 +num2
    }else if(operator === "-"){
        return  num1 - num2
    }else if(operator === "*"){
        return  num1 * num2
    }else if(operator === "/"){
        if(num2 === 0){
            return "Error: Division by zero"
        }else{
            return  num1 / num2
        }
    }else{ 
        return "invalid operator"

    }

}
alert(calculator())

//  5. Write a function that squares its argument.

function square(num) {
    return num * num;
}
document.write(square(4));

// 6. Write a function that computes factorial of a number.


function factorial() {
    var num = +prompt("Enter a number:")

    if (num < 0) {
        alert("Error: Factorial is not defined for negative numbers")
    } else {
        var result = 1;
        for (var i = 2; i <= num; i++) {
            result *= i // (result= result * i)  
        }
        alert("The factorial of " + num + " is " + result)
    }
}

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + " ");
    }
}
var start = +prompt("Enter start number for counting:");
var end = +prompt("Enter end number for counting:");
counting(start, end);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

function calculateHypotenuse() {
    function calculateSquare(x) {
        return x * x
    }
    var base = +prompt("Enter the base of a right angle triangle:")
    var perpendicular = +prompt("Enter the perpendicular of a right angle triangle:")

    var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular))

    alert("The hypoteneus of right angle triangle with base " + base + " and perpendicular " + perpendicular + " is " + hypotenuse)
}
calculateHypotenuse()

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

var width = +prompt("Enter width of rectangle: ");
var height = +prompt("Enter height of rectangle: ");
var area = areaOfRectangle(width, height);
alert("Area of Rectangle: " + area);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  document.write(isPalindrome('madam')); // true
document.write(isPalindrome('hello')); // false

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  const inputStr = 'the quick brown fox';
const outputStr = capitalizeFirstLetter(inputStr);
document.write(outputStr); // "The Quick Brown Fox"

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }
  const inputStr1 = 'Web Development Tutorial';
const longestWord = findLongestWord(inputStr1);
document.write(longestWord); // "Development"

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function countLetterOccurrences(str, letter) {
    return str.toLowerCase().split('').filter(c => c === letter.toLowerCase()).length;
  }
  const str = 'JSResourceS.com';
const letter = 'o';
const count = countLetterOccurrences(str, letter);
document.write(count); // 2

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

const PI = Math.PI;

function calcCircumference(radius) {
  const circumference = 2 * PI * radius;
  document.write(`The circumference is ${circumference.toFixed(2)}`);
}

function calcArea(radius) {
  const area = PI * radius ** 2;
  document.write(`The area is ${area.toFixed(2)}`);
}
