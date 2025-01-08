//getElementById
//getElementByClassName
//getElementByTagName
//querSelector
//querSelectorAll

let h1 = document.getElementById("tag1")
console.log(h1.textContent);



//text manipulation

h1.innerHTML ="Hello BANGTAN WORLD"

h1.innerText = "BulletProof"
h1.textContent = "Bangtansonyeontan"



// Redirect the user to Google's website
//////location.assign("https://www.google.com"); 

// Log the screen's current orientation
///console.log(screen.orientation);



//createElement

let div=document.createElement("div")
//div.innerText="create using js"
let textNode=document.createTextNode("BANGTAN BOYS <BTS>")
div.className="divclass"
div.classlist="divclass class2 class3"

div.append(textNode)
let body=document.getElementById("data")
body.append(div)


//ordered list

let list=document.getElementsByClassName
("one")[2]
console.log(list);
let list1=document.getElementsByTagName("li")
console.log(list1);
let list2=document.querySelector("ul li")
console.log(list2);
let list3=document.querySelectorAll("ul li")
console.log(list3);


//Unordered list

let body1= document.getElementById("data")
let ul = document.createElement("ul")
let l1 = document.createElement("li")
let l2 = document.createElement("li")
let l3 = document.createElement("li")
let l4 = document.createElement("li")
let l5 = document.createElement("li")
let l6 = document.createElement("li")
let l7 = document.createElement("li")
ul.append(l1,l2,l3,l4,l5,l6,l7)
console.log(ul);

let t1 = document.createTextNode("KIM NAMJOON");
let t2 = document.createTextNode("KIM SEOKJIN");
let t3 = document.createTextNode("MIN YOONGI");
let t4 = document.createTextNode("JUNG HOSEOK");
let t5 = document.createTextNode("PARK JIMIN");
let t6 = document.createTextNode("KIM TAEHYUNG");
let t7 = document.createTextNode("JEON JUNGKOOK");

l1.append(t1);
l2.append(t2);
l3.append(t3);
l4.append(t4);
l5.append(t5);
l6.append(t6);
l7.append(t7);

console.log(ul)
body.append(ul)

ul.setAttribute("id","tag")

//-------another way-------//

//ul.style.color="Green"
//ul.style.background="Black"
ul.style.cssText='color:skyblue'



//to reduce lines of code (list)//

//creating Array variable//


let BND = [
    "Sungho",
    "Riwoo",
    "Jaehyun",
    "Taesan",
    "Leehan",
    "Woonhak"
  ]

let ul2 = document.createElement("ul")
BND.map((i)=>{
    let li = document.createElement("li");
    let tn = document.createTextNode(i)
    li.append(tn);
    ul2.append(li);
//for reverse order use ---> ul2.prepend(li)
})
body.append(ul2);

//to remove
//body.children[0].remove()

//let li = document.getElementById("one")
//li.remove()


//date function
let date = new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());


//creating button

let button =document.getElementById("button")
button.addEventListener("click",()=>{
  alert("Button Clicked");
})


let parent=document.getElementsByClassName("div1")[0]
let child1=document.getElementsByClassName("div2")[0]
let child2=document.getElementsByClassName("div3")[0]
let child3=document.getElementsByClassName("div4")[0]
parent.addEventListener("click",()=>
{
    alert("You clicked the parent")
})
child1.addEventListener("click",()=>{
    alert("You clicked the child1")
})
child2.addEventListener("click",()=>{
  alert("You clicked the child2")
})
child3.addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("You clicked the child3")
})


const event1 =(e)=>{
  alert("You have clicked the button")
  console.log(e.target)
  remove()
}
child2.addEventListener("click",event1)
const remove=()=>{
    child2.removeEventListener("click",event1)
}

child1.addEventListener("mouseup",()=>{
    alert("You have released the mouse")
  })

child2.addEventListener("mousedown",()=>{
    alert("You have pressed the mouse")
  })

child3.addEventListener("mouseleave",()=>{  
    alert("You have left the div")  
  })


  const catchKeyboard=(e)=>{
    console.log(e);
  }

  window.addEventListener("keyup",catchKeyboard)

























