//Math in JS

//let round = Math.round(8.4);                      yahlitlash
//let pow = Math.pow(5,5);                          daraja
//let sqrt = Math.sqrt(25);                         ildiz
//let abs = Math.abs(-12.8);
//let ceil = Math.ceil(49.1);                       yaxlitlash katta songa                      (=50)
//let floor = Math.floor(49.9);                     yaxlitlash kichkina songa                   (=49)
//let min = Math.min(16,300,2010,14,329,1971);      eng kichkina son
//let max = Math.max(16,300,2010,14,329,1971);      eng katta son
//let trunc = Math.trunc(49.9);                     nuqtadan keyingi sonni olib tashlaydi       (=49)
//document.write(trunc);

let byTag = document.getElementsByTagName("h1");
let byid = document.getElementById("idNomi");
let byClass = document.getElementsByTagName("p");
let bySelector = document.querySelector(".classNomi");
let bySelectorAll = document.querySelectorAll(".classNomi");
let byAll = document.getElementsByTagName("h1").namedItem("idNomi");
let lorem = document.getElementsByClassName("loremtxt");

byAll.style.backgroundColor = "green";
byAll.style.color = "yellow";
byAll.style.width = "350px";
byAll.style.height = "200px";
byAll.style.border = "5px solid"

console.log(lorem);
