
/**** Section 5 👉 Functions in JavaScript ****/

// A JavaScript function is a block of code designed to perform a particular task.
// 3️⃣ Function Parameter vs Function Arguments 

            //Parameter
// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// sum(); //Arguments
// sum(20,30);
// sum(50,50);
// sum(5,6)


// 1

// function sum() {
//     var num1 = +prompt("Enter Number 1")
//     var num2 = +prompt("Enter Number 2")
//     console.log("sum of two numbers = " + (num1 + num2))

// }


// sum()

// 2

// function cal(num1, num2, opt) {

//     if (opt === "+") {
//         console.log(num1 + num2, "addition")
//     }else if (opt === "*"){
//         console.log(num1 + num2, "muliply")
//     }else if(opt === "-"){
//         console.log(num1 + num2, "less")
//     }
//     else if(opt === "/"){
//         console.log(num1 + num2, "Devide")
//     }


// }

// var num1 = +prompt("enter 1st num")
// var num2 = +prompt("enter 2nd num")
// var opt = prompt(opt)
// cal(num1, num2, opt)



// 3

// function foo() {
//     ///
//     var arr = ["hello", "world"]
//     return arr
// }

// console.log(foo(), "foo()")


//4

// function sum(a,b){
//   return total = a+b;
// }

// var funExp = sum(5,25);

// console.log('the sum of two no is ' + funExp );


//5  onclick

// function add() {
//     var num1 = +prompt("Enter number 1")
//     var num2 = +prompt("Enter number 2")
//     console.log(num1 + num2 )
// }


//6

// function foo(username) {
//     console.log("username", username)
// }

// foo("jaffar aman")
// foo("meer")
// foo("Sufiyan")


//7

// parameter
// function foo(userName, age) {
//     console.log("userName: ", userName, age)
// }


// foo("Jaffar Aman", 23) //args
// foo("MEER", 30) //args





// 8


// function foo() {
//     var num10 = 100
//     console.log("before return")
//     return 100 + 200  // return code brack kardeta hai.

//     console.log("after return")

// }

// console.log(foo(), "foo()")



// 9


// var userName; //global scope

// function foo() {
//     var userName = "JAffar Aman" //local scope
//     console.log(userName)
// }

// foo()

// console.log(userName)




// var userName = "jaffar"

// function foo() {
//     console.log("userName", userName)

//     userName = "meer"
//     console.log("userName", userName)
// }

// foo()
// console.log("userName", userName)


// 10)


// Events
// function greet(userName) {
//     console.log("userName", userName)
// }

//11 )

// function saveUserName() {
//     // // Read -- GET Value
//     // var userName = document.getElementById("userName")
//     // console.log("userName", userName.value)

//     // // Write -- Set  Value
//     // var userName = document.getElementById("userName")
//     // console.log("userName", userName.value)


//     // var userName = document.getElementById("userName")
//     userName.value = "Jaffar Aman"
//     console.log("userName", userName.value)


// }


//12 & 13 )

// function changeImg(check,elem){
//     console.log("changeImg", check, elem)

//     if(check == 'over'){

// elem.src = "./image/car2.jpg" 
//   }else{
//     elem.src = "./image/car1.jpg" 

//   }

// }


// 14)

// function inputFocus(inputField){
//     console.log(inputField , "inputFocus")
//     inputField.style.backgroundColor = "lightgrey"

// }


// function inputBlur(inputFild){
//     // console.log(inputFild.value.length , "inputBlur()")
//     // inputFild.style.backgroundColor = "black"

// if(inputFild.value.length  <3){

//     inputFild.style.color = "red"

// }else{
//     inputFild.style.color = "blue"

// }


// }

//...



// 15)

// function getValue() {
//     var para = document.getElementById("para")
//     console.log("getValue", para.innerHTML)

// }

// function setValue() {
//     var para = document.getElementById("para")
//     console.log("setValue")
//     para.innerHTML += "HELLO WORLD..."
// }

// 16 )

// var paraLongText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sit eius dolor molestias incidunt velit aliquid dolore tempora? Ducimus delectus animi, vel obcaecati quisquam perferendis amet doloribus, quis iste harum ad quos libero odio molestias sint a. Alias assumenda quis deleniti accusamus dolore. Quaerat corporis reprehenderit nihil minima nam dicta?"
// var paraShortText = "Lorem ipsum dolor sit amet consectetur adipisicing elit."



// function seeMore(anchorElem){
//     var para = document.getElementById("para")
// // console.log(para.innerHTML)

// if (anchorElem.innerHTML === "See More") {
//     anchorElem.innerHTML = "SEE LESS"
//     para.innerHTML = paraLongText
// }else{
//     anchorElem.innerHTML = "See More"
//     para.innerHTML = paraShortText

// }
// }


// 17)

// function showPass(btnElem){
//     console.log("showPass", btnElem.innerHTML )
// var password = document.getElementById("password")

// if(btnElem.innerHTML === "SHOW"){
//     btnElem.innerHTML = "HIDE"
//     password.type = "text"

// }else{
//     btnElem.innerHTML = "SHOW"
//     password.type = "password"

// }

// }



// 18 )

// function toggleImg(){
// var image = document.getElementById("image")
// console.log("image", image.className)

// // if(image.className == "show"){
// //     image.className = "hidden"

// // }else{
// //     image.className = "show"

// // }



// var image = document.getElementById("image")
// // console.log(image.className)
// image.className += " border"
// }


