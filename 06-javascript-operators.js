//Arithmetical operators
//Addition(+) for adding values together
let femaleStudents = 30;
let maleStudents = 20;
let totalStudents = femaleStudents + maleStudents;
console.log(totalStudents);
//increasing a value with 1
totalStudents++;
console.log(totalStudents);
maleStudents++;
console.log(maleStudents);
//*******

//subtactions (-)for subtracting values
let costOfProduction = 5000;
let sales = 8000;
let profit = sales - costOfProduction;
console.log(profit);

//decreasing a value by 1
profit--;
console.log(profit);

//multiplication(*)for multiplying values together
let price = 1500;
let quantity = 5;
let totalCost = price * quantity;
console.log(totalCost);

//division(/) for dividing two values together
let cakeSize = 10;
let numberOfPeople = 2;
let eachPersonCake = cakeSize / numberOfPeople;
console.log(eachPersonCake);

//modules(%)for getting what remains from the division of two numbers
let numOne = 15;
let numTwo = 4;
let result = numOne % numTwo;
console.log(result);
//***********

//comparison operators
/* comparison operatorsmare used to check if two or more values are the same or not*/
//comparison operators always returns true or false
//greater than operator ((>)

let emmaHeight = 170;
let davidHEIGHT = 140;
let isEmmaTallerThanDavid = emmaHeight > davidHEIGHT;
let isEmmaShorterThanDavid = emmaHeight < davidHEIGHT;
console.log(isEmmaTallerThanDavid);
console.log(isEmmaShorterThanDavid);

//greater than or equal (>=)and less than or equal (<=)
let valueOne = 500;
let valueTwo = 500;
let valueThree = valueOne >= valueTwo;
let valueFour = valueOne <= valueTwo;
console.log(valueThree);
console.log(valueFour);

//two values are exactly the same thing (===)
//two values are not the same thing (!==)
let passWord = "feke$";
let confirmPassWord = "feke$";
let isPassWordCorrect = passWord === confirmPassWord;
let isPassWordNotCorrect = passWord !== confirmPassWord;

console.log(isPassWordCorrect);
console.log(isPassWordNotCorrect);
