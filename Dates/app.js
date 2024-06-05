// var num = 1000.4587465496584625498
// console.log(typeof num) // num
// console.log(num.toFixed(3))  // 1000
// console.log(typeof num.toFixed(3))  // string


// 1)
// var now = new Date().toString()// convert object to string
// console.log(now);
// console.log(typeof now)
// console.log(now.slice(0, 15)) // copy date


// 2)

// var now = new Date("Aug 16 1988")  // Hard coted time
// console.log(now)


// 3)
 //var now = new Date().toDateString()  // get current date & Day
//var now = new Date().toTimeString() // get current time 
// var now = new Date().toLocaleDateString() // gat date (6/4/2024) jun-4-2024
 //var now = new Date().toLocaleTimeString() // get time
// console.log(now)



// 4)

//  var dayOfWeek = ["sun", "mon", "tues", "wed", "thur", "fri", "sat"]


// var now = new Date().getDay() // get weeks in num (day of week  0 to 6)
// console.log(now)
// console.log(dayOfWeek[now])


// 5)
// var now = new Date().getMonth() //month  0 to 11
// console.log(now)



// var now = new Date().getDate() //month  1 to 31
// var now = new Date().getFullYear() //get year
// var now = new Date().getMilliseconds() // 
//  console.log(now)


// 6)

// var getTime = new Date().getTime()  // get time in 1971 (milliscond)
// console.log(getTime)



//7)

//  // var dob = "16 Aug 1988"
// var dob = prompt("enter dob", "23 march 1992")

// var now = new Date()
// //console.log("now", now)


// var pastDate = new Date(dob)
// //console.log("pastDate", pastDate)


// var nowMiliSec = now.getTime() // get current time im milliscond
// var pastDateMiliSec = pastDate.getTime() // get DOB to till time im milliscond
// console.log("now", nowMiliSec)
// console.log("pastDate", pastDateMiliSec)


//  var diff = nowMiliSec - pastDateMiliSec
// console.log(diff);

//  var result = diff / (1000 * 60 * 60 * 24 * 365)

//  console.log("result", Math.floor(result))

