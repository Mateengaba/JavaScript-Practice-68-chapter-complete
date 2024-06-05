

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
// console.log("index #" ,s)                                  // index num + 4
// console.log(str.slice(0, s) + "HyperText Markup" + str.slice(s+4 ))  


// }

// }


// short mathard

// indexof
// charAt
// replace


// indexof ..  behind the seen loop chalat hai. (indexof charact leta hai or index num deta hai)


// var str = "Saylani"
// console.log(str.indexOf("l"))   //index num ber bata hai. agar kohi word exist nahi karta to -1 show kare ga.


// var str = "HyperText Markup Language or  is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. HTML It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."

// var indexnum = str.indexOf("HTML")
// console.log(indexnum)

// console.log(str.slice(0 , indexnum) + "HyperText Markup Language" + str.slice(indexnum + 4) )




//  var arr = ["apple", "mango"]
// console.log(arr.indexOf("mango"))

// var userCity = "lahore"
// var cities = ["karachi", "lahore"]


// if (cities.indexOf(userCity) !== -1) {
//     console.log("welcome")
// } else {
//     console.log("not allow")

// }




// lastIndexOf()

// var str = "Saylani welfare"
// console.log(str.lastIndexOf("a"))



//charAt => index   (charAt index num leta hai or charact hai)

// var str = "saylani"
//  console.log(str[1])        //same as below
// console.log(str.charAt(1))  //same as above


// replace    // string ka methord hai.

// var str = "HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. HTML It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."

//          // kia replace karna hai. /global   / kis se replace karna hai.
//  console.log(str.replace(/HTML/g, "HyperText Markup Language"))







// NUMBERS   Math methord


// Math.round()  . ka bad wala dacimal num remove kar deta hai (.5 se umer hoga to 52 kar dega or .5 se nicha ho ga to 51 ho ga.)

// var num = 51.553

// console.log(num)
// var round = Math.round(num)
// console.log(round, "round")


//Math.floor()   . ka bad wala number read hi nahi karta.

// var floor = Math.floor(num)
// console.log(floor, "floor")


//Math.ceil()  . ka ba kohi bhi num ho who +1 kardeta hai.

// var ceil = Math.ceil(num)
// console.log(ceil, "ceil")



// Math.random()   random number genrate karna ka lia   0.00000000 se 0.999999999

// var abc = Math.random();  //0.00 ka num dega
// console.log(abc)

// var num = Math.floor(Math.random() * 10 + 1 )  // ab 0 nahi ahe ga.
// console.log(num)




//  string ko num me convert karna ka lia

// var num1 = "100.50"
// var numType = Number(num1)
// console.log(typeof numType)
// // var numType = +num1

/// parseInt
// var num1 = "101.50"

// var numType = parseInt(num1)
// console.log(numType)
//  console.log(typeof numType)




// num ko string me convert karna ka lia

//  var num1 = 500
//  console.log(typeof num1.toString())
// console.log(typeof String(num1))