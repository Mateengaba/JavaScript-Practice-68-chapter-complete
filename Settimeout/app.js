

console.log("hello world 1")

// setTimeout 1 bar chalta hai time ka bad

// setTimeout(function(){
// console.log("Hello world 2");
// },2000)


// console.log("hello world 3")
// console.log("hello world 4")



// setInterval bar bar chalta hai jo time dia hai us ka bad

// setInterval(function (){
//     console.log("Hello world 5");

// },3000);


var counter = 0

var intervel = setInterval(function(){
    counter ++
    console.log(counter);
console.log("hello fun");
    if (counter == 10){
        clearInterval(intervel)

    }

},2000)


