//Array

// var fruitArr = ["apple", "mango", "orange", "banana"];
// console.log(fruitArr.length)


// var fruits = ["apple", "mango", "banana", "karachi"];

// fruits[2] = "orange";



// pop, push == >last index
// fruits.pop(); //remove last index
// fruits.push("orange"); //add value last index

// shift , unshift =>first index
// fruits.shift(); //remove value first index
// fruits.unshift("oranage"); //add value first index

// pop push  = >last
// shift unshift => start

// slice , splice  = > copy , remove or add 


// length   1           2       3           4
// var fruits = ["apple", "mango", "orange", "banana", "karachi"];
// index    0         1         2           3


//1)
// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";

// console.log(cars);


// var fruits = ["apple", "mango", "orange", "banana", "karachi"];

//2)
// index, length 
// var arrCopy = fruits.slice(3,5);
// console.log("arrCopy", arrCopy);

//3)
// index, length 
//var arrCopy = fruits.slice(1, -1); //second last value
//console.log("arrCopy", arrCopy);

//4)

//is ma sirf 1 value di hai (index num). ab ya index num sa last tak print kar da ga.
// var arrCopy = fruits.slice(2); //second last value
// console.log("arrCopy", arrCopy);

//5)

// splice
//The first parameter () defines the position where new elements should be added (spliced in).

//The second parameter () defines how many elements should be removed.


// var fruits = ["apple", "mango", "karachi", "orange", "banana"];
// fruits.splice(3, 0, "pakistan", "lahore");
// console.log("fruits", fruits);



// var arr = ["apple", "mango" , "banana"];

// //kon sa index se add start karna ha, kitnaindex delete karna hai , kia aad karna hai 
// arr.splice(1, 0, "Orange", "karachi", "lahore")
// console.log("arr", arr)



//6)
//  var cities = ["karachi", "lahore", "Islamabad"]
// slice copy nikalta hai .do chiz leta hai. index or lenght. kon sa index number kaha se copy karna hai.. or kaha tak print karna hai.

// var citiesCopy = cities.slice(-2, 3)
// console.log("citiesCopy", citiesCopy)

// (kon se length pa value add karni hai, or is ka bad ki kitni value delete karni hai )
// cities.splice(1, 0 , "multan")
//  console.log(cities)


// console.log("cities", cities)

// var fruits = ["apple", "mango", "karachi", "orange", "banana"];

// //splice 2 chiz leta hai. (index) kis index ka bad value aad karni hai. or is ka bad kitni value delete karni hai.
// fruits.splice(2, 0, "pakistan", "lahore");
// console.log("fruits", fruits);



// for Loop
//***************/

// initialization ;condition; increment /decrement
// for (var a = 1 ; a<=100 ;a++){
// console.log("a" ,a)
// }

///1 to 50

// for (var num = 1; num <= 50; num++) {
//     document.wrnumte(num + "<br />")
// }

//10 to 0

// for (var num = 10; num > 0; num--) {
//     document.wrnumte(num + "<br />")

// }



//table
//1)

// for (var a=1; a<=10 ; a++){
// document.write("2 x" + a + '=' + 2 * a,"<br/>")
// }

//table
//2)

// var tablenum = +prompt("Enter table num")
// var teblenght = +prompt("Enter table length")

                //less than
// for (var a = 1; a <= teblenght; a++) {
//   document.write(tablenum + " x " + a + ' = ' + tablenum * a, "<br/>")
// }


//Reverse count
//3)
             //graten then
// for(var a = 10;   a>=1 ;   a--){
// console.log(a)
// }


//Reverse Print

// var fruits = ["apple", "mango", "karachi", "orange", "banana"];
// for(var f = fruits.length-1; f>=0; f-- ){
// console.log("fruits", fruits[f])
// }




//4)
//Even num

// for(var a = 1 ; a <= 20 ; a++){

//   if(a % 2 == 0){
//     console.log("Even", a)
//   }
  
// }

//5)
// odd

//Even num

// for(var a = 1 ; a <= 20 ; a++){

//   if(a % 2 !== 0){
//     console.log("odd", a)
//   }
  
// }


//6)

//Array la uper loop ma initialization 0 se hoti hai.

//var stdArr = ["Ali", "john", "bilal", "sufiyan", "Jaffar", "Aman", "talha"]
// console.log(stdArr.length)
// // console.log(stdArr[0])

//document.write("<h1>" + stdArr +  "</h1>")

//----------//
//Arry ka uper ultration chalana.

// for (var i = 0; i < stdArr.length; i++) {
//     console.log(i, "index number")
//     document.write("<h1>" + stdArr[i] + "</h1>")
// }


// var arr = ["karachi", "lahore", "multan", "delhi" ,"londan"]
// for(var a = 0 ;a<=4; a++ ){
//   console.log(arr[a])


// }
//--------------//

// var cities = ["lahore", "multan", "islamabad"]

// if (cities[0] === "karachi") {
//     alert("the city of light")
// } else if (cities[1] === "karachi") {
//     alert("the city of light")

// } else if (cities[2] === "karachi") {
//     alert("the city of light")

// } else if (cities[3] === "karachi") {
//     alert("the city of light")

// } else {
//     alert("karachi is not exist")
// }



//....

//var cities = ["lahore", "multan", "karachi", "islamabad"]

// for (var num = 0; num < cities.length; num++) {
//     console.log(cities[num])

//     if (cities[num] === "karachi") {
//         alert("the city of light")
//     }

// }



// for (var i = 0; i < 10; i++) {
//     if (i === 6) {// is ma jo num likha hai is ko chor ka loop chale ga.
//           continue
//     }
//     console.log(i)
// }



//............ flag
// Array ka uper condition lagani hai to sirf if lagta hai. else nahi lagta.

// var userCity = prompt("Enter your city!").toLowerCase()
// var cityCollection = ["karachi", "lahore", "multan"]
// var ismMatch = false   // ismatch false hai. condition true hogi to ismatch true hoga. warna false hoga or not exist chale ga.

// for (var i = 0; i < cityCollection.length; i++) {
//     if (cityCollection[i] === userCity) {
//         console.log("exist")
//         ismMatch = true
//        break
//     }
// }
// // console.log("ismatch", isMatch)

// if(ismMatch === false){
// console.log("not exist")
// }



//flag (2)

// var userInput = prompt("Enter fruits").toLowerCase()
// var fruits = ["apple", "orange", "mango"]
// var flag = false


// for (var a = 0; a < fruits.length; a++) {
//     if (fruits[a] === userInput) {//[a] ma ak ak karka frute ata rahe ga.
//         console.log("fruit exist")
//         flag = true
//         break
//     }
// }


// if (flag === false) {
//     console.log("not exists")
// }

//...

//flag (3)

// var userCity = prompt("Enter your city!")
// var cityCollection = ["kaRaChi", "lahore", "multan"]
// var ismMatch = false 

// for(var c = 0 ; c < cityCollection.length; c++){

// if(userCity.toLowerCase() === cityCollection[c].toLowerCase()){
// console.log("Welcom")
// ismMatch=true
// break
// }
// }

// if(ismMatch == false){
//     console.log("USER CITY NOT EXISTS!")

// }


//...

// for (var i = 1; i <= 100; i++) {
//   if (i == 50) {
//       // console.log(i, "HELLO WORLD")
//       //break     49 pa brack kardega
//        //continue   50 print nahi karwai ga
//   }
//   console.log(i)

// }



//......



// nested loop

// outer loop. 1 dafa outer chalega. phir inner chalega jabtak false na ho jahe. is tarha chalta rahe ga jabtak outer false na ho jahe.
// for (var i = 1; i <= 5; i++) {
//     console.log(i, "outer")


//     //inner loop
//     for (var j = 1; j <= 2; j++) {
//         console.log(j, "inner")
//     }
// }

//...


// todi array / multi dimention array


// var arr = [["apple", "mango"], ["banana", "orange"]]
// // console.log(arr[1][0])   //1["banana"]


// //outer
// for (var i = 0; i < arr.length; i++) {
//   //console.log(arr[i])  //0["apple", "mango"] 2nd time chalega to 1["banana", "orange"]

//  //inner   
//     for(var j = 0 ; j < arr[i].length  ;j++   ){   //j="apple", "mango", 2nd bar chalega to j="banana", "orange"
//         console.log(arr[i][j])
//     }

// }


// touperCase / tolowercase

// var city = "  karachi  city"
// console.log(city.length)

// var city = "karachi"
// console.log(city.slice(0 , -1)) // copy nikale ga last alphabad hata dega.


//capatilize
//1)

// var city = "karAchI"; //K arachi
// var city = prompt("enter city"); //K arachi

// var firstLetter = city[0].toUpperCase()
// // console.log(firstLetter)

// var otherLetters = city.slice(1).toLowerCase()
// // console.log(otherLetters)

// var cap  = firstLetter + otherLetters

// //short code single line.
// // var cap  = city[0].toUpperCase()  + city.slice(1).toLowerCase()

// console.log("cap", cap)



//2)...
// var str = "mateen gaba";
// var arr = str.split(" "); // string to array
// console.log(arr)
// var tampArr=[]  // tamperari array

// for(var n = 0 ; n < arr.length ; n++){
// // console.log(arr[n], "arr")

// var cap = arr[n][0].toUpperCase() + arr[n].slice(1).toLowerCase()
// console.log(cap , "cap")
// tampArr.push(cap) // ak ak kar ka array me push karta raho

// }
// var join = tampArr.join(" ") // array to string
// console.log(join  )

//....

//3)


// var str = "saylani mass it traning";
// var arr = str.split(" "); // string to array
// console.log(arr)
// var tampArr=[]  // tamperary array

// for(var n = 0 ; n < arr.length ; n++){
// // console.log(arr[n], "arr")

// var cap = arr[n][0].toUpperCase() + arr[n].slice(1).toLowerCase()
// console.log(cap , "cap")
// tampArr.push(cap) // ak ak kar ka array me push karta raho

// }
// var join = tampArr.join(" ")
// console.log(join  )


//....


// 4️⃣ Whnumle Loop Statement
// The whnumle statement creates a loop that executes a specnumfnumed statement 
// as long as the test condnumtnumon evaluates to true. 

// var num=20;
// // block scope 
// whnumle(num <= 10){// whnumle loop phale condnumtnumon check karta hanum. cond true ho gnum to console ho ga warna nahnum.
//   console.log(num); //numnfnumnte loop
//   num++;
// }


// var num = 0;
// do{
//   console.log(num); //numnfnumnte loop
//   num++;
// }whnumle(num <= 10);

// 6️⃣ For Loop 

// for(var num = 1; num <= 10; num++){
//     debugger;
//     console.log(num);
// }


// for (var num = 1; num <= 10; num++) {
//     document.wrnumte("HELLO WORLD" + " " + num + "<br/>")
// }

 //1 to 50

// for (var num = 1; num <= 50; num++) {
//     document.wrnumte(num + "<br />")
// }

//10 to 0

// for (var num = 10; num > 0; num--) {
//     document.wrnumte(num + "<br />")

// }



// var stdArr = ["Ali", "john", "bilal", "sufiyan", "Jaffar", "Aman", "talha"]
// console.log(stdArr.length)
// // console.log(stdArr[0])

// // document.write("<h1>" + stdArr[0] + "</h1>")




// for (var i = 0; i < stdArr.length; i++) {
//     console.log(i, "index number")
//     document.write("<h1>" + stdArr[i] + "</h1>")
// }





// var cities = ["lahore", "multan", "islamabad"]

// if (cities[0] === "karachi") {
//     alert("the city of light")
// } else if (cities[1] === "karachi") {
//     alert("the city of light")

// } else if (cities[2] === "karachi") {
//     alert("the city of light")

// } else if (cities[3] === "karachi") {
//     alert("the city of light")

// } else {
//     alert("karachi is not exist")
// }



//....

//var cities = ["lahore", "multan", "karachi", "islamabad"]

// for (var num = 0; num < cities.length; num++) {
//     console.log(cities[num])

//     if (cities[num] === "karachi") {
//         alert("the city of light")
//     }

// }



// for (var i = 0; i < 10; i++) {
//     if (i === 6) {// is ma jo num likha hai is ko chor ka loop chale ga.
//           continue
//     }
//     console.log(i)
// }









//Finding segments


// var para = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers."

// console.log(para.slice(0 ,49), "para")

// for(var p= 0; p < para.length; p++){
               
// // console.log(para.slice(p, p+12) )    // (index 0,  length)

// if (para.slice(p, p+12) === "World War II"){
//     console.log(para.slice(0 , p) + "the Second World War" + para.slice(p+ 12))
// }

// }



//2)


// var str = "HyperText Markup Language or  is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. HTML It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
// console.log(str)
// // console.log(str.slice(0, 172))


// for(var s = 0; s < str.length; s++){
           
//     // console.log(str.slice(s ,s+4))    // (index 0,  length)

// if(str.slice(s ,s+4) === "HTML"){
// console.log("index #" ,s)                                  // index num
// console.log(str.slice(0, s) + "HyperText Markup" + str.slice(s+4 ))  


// }

// }