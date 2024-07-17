console.log("Hello")

//1)

// one by one ID deka get karna ka lia.
// var para1 = document.getElementById("para1")
// var para2 = document.getElementById("para2")
// var para3 = document.getElementById("para3")

// console.log("para" , 

// para1,
// para2,
// para3
// )

//2)
// ak jesa sare elements get karna ka lia.

// var paras = document.getElementsByTagName("p")
// console.log(paras)

//one by one element pa styling hogi.
// paras[2].style.color = "red"   
// paras[4].style.color = "blue"


//3)
//for loop laga ke sare p element get karna ka lia 

// var paras = document.getElementsByTagName("p")
// //odd
// for(var p=0; p <paras.length; p++){
// console.log(paras[p]);
// if(p % 2 ==0){
//     paras[p].style.color = "green"

// }

// }


//even
// for(var p=0; p <paras.length; p++){
//     console.log(paras[p]);
//     if(p % 2 !==0){
//         paras[p].style.color = "green"
    
//     }
    
    
//     }
//.....


//4)
// agar sare P tag get nahi karna to. spacifi P tag ko div ka under rakh ka get karen ga.

// var parent = document.getElementById("parent")
// console.log("parent", parent)

// var childParas = parent.getElementsByTagName("p")
// console.log("childParas", childParas)
// childParas[1].style.color = "red"




// The HTML DOM (Document Object Model)
            //DOCTYPE & HTML
//console.log(document.childNodes[1].childNodes[2].childNodes[1])

// Topics
// childnodes => get child with junk artifacts
// children => get child without junk artifacts


// var h1 = document.childNodes[1].childNodes[2].childNodes[1]
// var h2 = document.children[0].children[1].children[0]
// console.log("h1", h1)
// console.log("h2", h2)



//5)

// Parent to child

// firstElementChild
// lastElementChild
// firstChild
// lastChild




//var Abba = document.getElementById("Abba")
// console.log(Abba.childNodes[1].nodeType)    // <!-- 0 index pa junk text ho ga -->
// console.log("Abba1", Abba.children[1])

//Difference Between .firstChild and .firstElementChild:
//.firstChild: Yeh property pehla child node return karti hai, chahe wo text junk node ho ya element node.
 //console.log("Abba2" , Abba.firstChild)   // junk text return ho ga

 //.firstElementChild: Yeh property sirf pehla element node return karti hai, text junk nodes ko ignore karti hai.
// console.log("Abba3" , Abba.firstElementChild)  //  first element node return karta hai


 //Difference Between .firstChild and .firstElementChild:
//.firstChild: Yeh property pehla child node return karti hai, chahe wo text node ho ya element node.
//.firstElementChild: Yeh property sirf pehla element node return karti hai, text nodes ko ignore karti hai.

//console.log("Abba4" , Abba.lastElementChild)   // last element node return karta hai,




//6)

// Child to Child
// nextElementSibling
// previousElementSibling
// nextSibling
// previousSibling

// var Abba = document.getElementById("Abba")

// //console.log(Abba.firstElementChild.nextElementSibling) // first element ka next brother le ahe ga. 


//  var para1 = Abba.firstElementChild
//  var para4 = Abba.lastElementChild

//  console.log('para4' , para4.previousElementSibling.previousElementSibling); // last element se phalewal bhai phir phale wla bhai lai ga.
//  console.log("para1" , para1.nextElementSibling.nextElementSibling); // first element ka bad bad wala bhai phir bad wala bhai lahe ga.



//7)


// var child2 = document.getElementById("child2")
// console.log("child2", child2.parentNode);  // .parentNode property use hoti hai kisi bhi node ke parent node/element ko access karne ke liye.

// console.log("child2", child2.parentNode.nodeName); // .nodeName property use hoti hai kisi node ke name ko check karne ke liye.
// //Is case mein, DIV return karega, kyunki <div id="Abba"> ka node name "DIV" hai


//8)

// var paras = document.getElementsByTagName("p")
// console.log(paras.length)  // P ki length batai ga.


// 9)

// function showPass(){
//      var input = document.getElementById("input")
// //console.log("input" , input); 
 
// input.placeholder = "enter your pass"    // ya input element ka under placeholder attribute set kar rahi hai 

// var checkAttribute = input.hasAttribute("placeholder") // hasAttribute method check karta hai ke input element ke paas "placeholder" attribute hai ya nahi. isa khi bhi attribute check kar sakte hai
// console.log("checkAttribute", checkAttribute) // ya true ya false return karta hai.

//  var attrValue = input.getAttribute("placeholder")  //  getAttribute method use hota hai kisi attribute ki value ko check karne ke liye.
//  console.log("attrValue", attrValue)  // maslan placeholder ma kia hai.

//  input.setAttribute("placeholder", "Enter password")   // setAttribute method use hota hai kisi attribute ko set ya update karne ke liye.
//      console.log(input.attributes)   // Yeh line input element ka placeholder attribute update kar rahi hai "Enter password" value ke sath.

// }


// input.placeholder =""
// input.setAttribute("" , "")
///Dono tarike effectively same kaam karte hain jab aap properties set kar rahe hote hain jo attributes bhi hain (jese placeholder), lekin setAttribute method zyada 
//versatile hai aur aapko kisi bhi attribute ko set karne ki flexibility deta hai.



// innerHTML vs InnerCotant

// var Hello = document.getElementById("Hello")
// console.log(Hello)

// var Hello2 = Hello.innerText
// console.log('innerText', Hello2);

// var Hello1 =  Hello.textContent
// console.log('textContent', Hello1);



// var Hello3 = Hello.innerHTML
// console.log('innerHTML', Hello3);





// Style

//get element by tag name. ya array me return kare ga.

// 1)

// var paras = document.getElementsByTagName("p")
// console.log("paras" , paras[2].innerHTML)

// // paras[2].style.color = "red"

// for (var p = 0 ; p < paras.length; p++){
//     console.log("para", paras[p].style.backgroundColor = "blue");

//     console.log("para", paras[p].style.color = "red");


// }