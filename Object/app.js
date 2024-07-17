//console.log("Hello");

//Array collection
// var arr = ["karachi" , "lahore"]


// object collection
// var obj = {

      //key : value
//     city: "karachi"
// }



// 1)

// var stdArr = ["Pakistan", "John", 28, "Karachi"]
// stdArr[4] = 1010
// stdArr[0] = "India"
// console.log("arr", stdArr)


// var stdObj = {
//     name: "John Doe",
//     age: 28,
//     city: "Karachi",
//     country: "Pakistan"
// }

// stdObj.id = 1010   // add value
// stdObj.country = "India"   // update value
// //console.log("stdObj", stdObj);

// var check = "id" in stdObj // check id hai object ma ya nahi.
// console.log(check)

// // delete stdObj.name // value delete karna ka lia
// // console.log("obj", stdObj)

// // console.log(stdObj.name ) // obj 


// 2)


// var stdObj = {
//     name: "John Doe",
//     age: 28,
//     city: "Karachi",
//     country: "Pakistan"
// }

// //for in
// for (var i in stdObj) {
//     // if (propName == "age") {
//     //     continue
//     // }
//     console.log("i", i, stdObj[i])
// }

//console.log(stdObj)



// Create an Object
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   // Build a Text
//   let text = ""; // empty 

//   //For-in Loop:

//   for (let value in person) {  // object ki key value variable ma store ho jahe gi.
//     text += person[value] + " "; // loop chale ga 1st value ma name ahe ga 2nd age or 3rd city. += ka matlab apas me Concatenation hoti rahe gi.
//   };
  
// console.log(text);

// 3)

// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
//   };

//   console.log(person.firstname + " is " + person.age + " years old ");


// 4) Method (object ka under function bhi bana sakte hai.)

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName());


//5)

// var std = {
//     name: "Mateen",
//     age: 35,
//     courses: ["HTML", "CSS", "JS"],
//     result: undefined,
//     email: null,
//     marks: {
//         html: 80,
//         Css: 85,
//         js: 70
//     }
// }

// console.log("mark js" , std.marks.js)
// console.log(std.name, "std")
// console.log(std.courses[2], "std")
// console.log(std.courses[1], "std")

//6)

// var std = {
//     name: "Mateen",
//     age: 35,
//     courses: ["HTML", "CSS", "JS"],
//     result: undefined,
//     email: null,
//     marks: {
//         html: 80,
//         Css: 85,
//         js: 70
//     },
//     calcMarks: function (name) { // this is object ka under ki value la ga.
//         var total = this.marks.html + this.marks.Css + this.marks.js
//         console.log("name", name)
//         this.result = total
//         return total
//     }

// }
// //1
// std.calcMarks("Mateen")
// console.log(std)

// //2
// console.log(std.calcMarks("Mateen"))

// //3
// var stdTotalMarks = std.calcMarks("Mateen")
// console.log("stdTotalMarks", stdTotalMarks)


// 7)

// Constructor Function for Person objects

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//   const std1 = new Person("John", "Doe", 50, "blue");
//   const std2 = new Person("Mateen", "Gaba", 35, "black");
//   const std3 = new Person("Syfiyan", "Mansoor", 32, "Brown");
//   const std4 = new Person("Meer", "Quais", 30, "Gray");


// console.log(std1,
//     std2,
//     std3,
//     std4


// );