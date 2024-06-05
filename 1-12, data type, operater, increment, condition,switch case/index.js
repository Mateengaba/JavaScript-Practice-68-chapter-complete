/**** Section 4👉 Data Types in JavaScript ****/


// var myName = "Mateen";
// console.log(myName);

// var myAge = 26;
// console.log(myAge);

// var iAmMateen = false;
// console.log(iAmMateen);

// // typeof operator 
// console.log(typeof(iAmMateen));


// DataTypes Practice

// console.log( 10 + "20");
// 9 - "5"
// console.log( 9 - "5"); //bug
// "Java" + "Script"
// console.log( "Java "+ "Script");
// " " + " "
// console.log( " " + 0);
// " " + 0
// "mateen" - "gaba"
// true + true
// true + false
// false + true
// false - true


// console.log("mateen" - "gaba"); NaN





// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between null vs undefined? 

// nul
// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));

// //2nd javascript bug


//undefined
// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));




// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN?

// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number 


// var myPhoneNumber = 9876543210;
// var myName = "thapa technical";

// //is a number?
// console.log(isNaN(myPhoneNumber)); //false
// console.log(isNaN(myName)); //true

// if(isNaN(myName)){
//     console.log("plz enter valid phone no");
// }



// NaN Practice 🤯

  
// NaN === NaN;        
// Number.NaN === NaN; 
// isNaN(NaN);         
// isNaN(Number.NaN);  
// Number.isNaN(NaN);


// console.log(isNaN(NaN));




// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator " + 27%4);





//chapter#6



// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

// var num = 15;
// // var newNum = num++;

// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);


// var a = 10

// // var add = 10  //POST increment    pehly print bad main add
// var add = ++a   //PRE increment  pehly add phr print

// console.log("add=>>>>", add)
// console.log("a=>>>>", a)

// var a = 15;

// // 15  /   (1+15)=16 / 16(16+1)=17/, (17+1)=18 /, (1+18)=19/, 19(19+1)=20/, 20(1+20)=21/ (but last value is 20) 

// var value = a + ++a + a++ + ++a + ++a + a++ + a++;

// // 15 + 16 + 16 + 18 + 19 + 19 + 20 

// console.log(value)  Ans: 123



// var a = 10;

// // 10(10+1)=11/, 11(11+1)=12/, 12(12-1)=11/, (11-1)=10/, 10(10-1)=9/, 9/, (1+9)=10/.

// var value = a++ + a++ - a-- + --a + a-- + a + ++a

// // 10 + 11 - 12 + 10 + 10 + 9 + 10

// console.log(value)
// // 48 ans


//Unfamiliar operators

//var value = 10 + 20 - 64;
// var value = 10 + (10 - 30) - 20 + 10
//           = 10 + (-20) -20 +10
//            = 10 - 20 -20 +10
//            = 20 - 20 - 20
//             0 -20
//             -20

// console.log(value)

// var value2 = (10 - 20 * 2) + 20 - 10 * 5
//   =  (-30) - 30
//   = -30 - 30
//    = -60
// console.log(value2)




// 3️⃣Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.

// var a = 30;
// var b = 10;

// //Equal (==)
// console.log(a == b);


// Not equal (!=)
// console.log(a != b);

// // Greater than (>)
// console.log(a > b);

// // Greater than or equal (>=)
// console.log(a >= b);

// // Less than (<)
// console.log(a < b);

// // Less than or equal (<=)
// console.log(a <= b);




// 🙋‍👨‍🏫 Interview Question 4 🙋‍👨‍🏫
// What is the Difference between == vs === ?

// //3 Equal (===) check both value and typeof..
//== check only the value VS === check value and data type also.
// console.log(5 === "5");


// sol 
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2 );

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

// console.log(num1 === num2 );



//&& || ,

// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

// logical operators => gates

// && => end gate  => condition1 && condition2 => true && true => true
// && => end gate  => condition1 && condition2 => false && true => false


//  ||
// || => OR gates => condition1 || condition2 = > false || true => true
// || => OR gates => condition1 || condition2 = > true || false => true
// || => OR gates => condition1 || condition2 = > false || false => false


// = => assign opt
// == => equal to | check only value
// ===  =>  equal to or check data type



// var a = 30;
// var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.

// agar sare action (operators) true honga to result true ahe ga warna false ahe ga.

// console.log(a > b && b > -50 && b < 0);


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

// is me agar 1 bhi action (operators) true ahe ga to result true ho jahe ga.

// console.log((a < b) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

// console.log(!((a>0) || (b<0)));
// console.log(!true);
// console.log(!false);


//Chapter#9 prompt

// var userName = "Jaffar Aman"

// var userName = prompt("Enter USER NAME")
// console.log("userName==>", userName)

// var value1 = +prompt("Enter value 1", 10)
// var value2 = +prompt("Enter value 2")

// console.log(typeof value1)

// var add = value1 + value2

// console.log(add)


//Chapter#10 if statements

//* 1️⃣If...Else */
// The if statement executes a statement if a specified condition is truthy. 
// If the condition is falsy, another statement can be executed.

// true condition
// if (condition) {
//     // Block of statements
//     console.log("ALLOW")
// }
// // false condition
// else {
//     console.log("NOT ALLOW")
// }

// if else
// if =>>> true condition
// else =>>> false condition


// = => assign opt
// == => equal to | check only value
// ===  =>  equal to or check data type




// >, <, <=, >=

// logical opt => gates

// && => end gate  => condition1 && condition2 => true && true => true
// && => end gate  => condition1 && condition2 => false && true => false


//sol

// if raining = raincoat
// else no raincoat


// var tomr = 'rain';

// if(tomr == 'rain'){
//   console.log('take a raincoat');
// }else{
//   console.log('No need to take a raincoat');
// }.


//sol

// var year = 2024;
// //debugger;

// if(year % 4 === 0){
// if(year % 100 === 0){
    
//     if(year % 400 === 0){
//         console.log("This year " + year + " is a leep year")

//     }else{
//         console.log("This year " + year + " is not a leep year")

//     }

// }else{
//     console.log("This year " + year + " is a leep year")

// }
// }else{
//     console.log("This year " + year +  " is not a leep year")
// }


//sol

// What is truthy and falsy values in Javascript?

// we have total 5 falsy values in javascript
// 👉 0,"",undefined,null,NaN,false** is false anyway

// if(score = 0){
//   console.log("OMG, we loss the game 😭");
// }else{
//   console.log("Yay, We won the game 😀");
// }



//sol


//  var userAge = prompt("Enter your age...")

// if (userAge === 20) {
//     console.log("ALLOW")
// } else {
//     console.log("NOT ALLOW")
// }



//sol

//     false         ||  true
// if (userAge >= 20 && userAge <= 50) {
//     console.log("ALLOW")

// } else {
//     console.log("NOT ALLOW")

// }

//Sol

// var edu = "intermediate"

// if (edu === "matric") {
//     console.log("ALLOW MODULE A")
// } else if (edu === "intermediate") {
//     console.log("ALLOW MODULE B")
// } else {
//     console.log("NOT ALLOW")
// }

//Sol

// var userAge = +prompt("Enter your age");

// if (userAge >= 0 && userAge < 18) {
//     console.log("YOU ARE KID")
// } else if (userAge >= 18 && userAge <= 30) {
//     console.log("YOU ARE LEGEND....")
// } else if (userAge > 30 && userAge <= 50) {
//     console.log("YOUR ARE ULTRA LEGEND....")

// } else if (userAge > 50 && userAge <= 80) {
//     console.log("YOUR ARE PRO  LEGEND....")
// } else if (userAge > 80 && userAge <= 100) {
//     console.log("STAY HOME")
// } else {
//     console.log("DEAD")
// }

//Sol

// NESTED IF

// var userAge = 20;
// var userGender = "female";

// if (userAge >= 20) {
//     if (userGender === "male") {
//         console.log("ALLOW")
//     } else {
//         console.log("your gender is not match..")
//     }
// } else {
//     console.log("YOUR ARE IS LESS")
// }


// if (userAge >= 20 && userGender === "male") {
//     console.log("ALLOW")
// } else {
//     console.log("NOT ALLOW")
// }



//sol

// CALCULATOR


// var number1 = +prompt("ENTER NUMBER 1")
// var number2 = +prompt("ENTER NUMBER 2")
// var opt = prompt("ENTER opt")


// if (opt === "+") {
//     console.log(number1 + number2)
// } else if (opt === "-") {
//     console.log(number1 - number2)
// } else if (opt === "*") {
//     console.log(number1 * number2)

// } else if (opt === "/") {
//     console.log(number1 / number2)

// } else {
//     console.log("INVALID OpT")
// }


//sol

//var num1 = 500
//sum of 500 + 500 =  1000
//console.log("sum of " + num1 + " + " + num1 + " = " + (num1 + num1))



// 80 && 100 == A +
// 70 && 79 == A
// 60 && 69 == B
// 50 && 59 == C
// 40 && 49 == D
// 0 && 39 == Fail


// var percentage = +prompt("Enter your percentage...");

// if (percentage >= 80 && percentage <= 100) {
//     console.log("A+")
// } else if (percentage >= 70 && percentage <= 79) {
//     console.log("A")

// }


//Sol
// 2️⃣Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands

// var age = 17;
// if(age >= 18){
//   console.log("you are eligible to vote");
// }else{
//   console.log("you are not eligible to vote");
// }

// var age = 18;
// console.log((age >= 18) ? "you can vote" : "you can't vote");



//Sol

// 3️⃣ switch Statement


// var area = "square" ;
// var PI = 3.142, l=5, b=4, r=3;


// 1) if else
// if(area == "circle"){
//   console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//   console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//   console.log("the area of the rectangle is : " + (l*b));
// }else{
//   console.log("please enter valid data");
// }




// nested if

// var email = "jaffar@gmail.com";
// var pass = "smit";

// var userEmail = prompt("enter your email");
// var userPass = prompt("enter your password");

// // if (userEmail === email && userPass === pass) {
//   console.log("login");
// } else {
//   console.log("invalid email & password");
// }

// if (userEmail == email) {
//   if (userPass === pass) {
//     console.log("login");
//   } else {
//     console.log("password invalid");
//   }
// } else {
//   console.log("email not found!");
// }



//2) switch
// var area = "triangle" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//   case 'circle': 
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }   


//sol

// var days = 6;

// switch(days){
// case 0:
//     console.log("today is monday")
//     break;

//     case 1:
//         console.log("today is tuesday")

//     break;

//     case 2:
//         console.log("today is wenesday")

//     break;

//     case 3:
//         console.log("today is thusday")

//     break;

//     case 4:
//         console.log("today is friday")

//     break;

//     case 5:
//         console.log("today is saturday")

//     break;

//     case 6:
//         console.log("today is sunday")

//     break;

//     default:
//         console.log("enter valid day")

// }




