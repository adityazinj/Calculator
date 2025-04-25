let ac = document.querySelector(".ac");
let ip = document.querySelector(".ip");

let del = document.querySelector(".del");
let mod = document.querySelector(".mod");

let divi = document.querySelector(".divi");
let seven = document.querySelector(".seven");

let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let multip = document.querySelector(".multip");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let subs = document.querySelector(".subs");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let additi = document.querySelector(".additi");
let szero = document.querySelector(".szero");
let dzero = document.querySelector(".dzero");
let dot = document.querySelector(".dot");
let equal = document.querySelector(".equal");

// Adding Event Listners

ac.addEventListener('click',()=>{
    clearInput();
});
del.addEventListener('click',()=>{
    delInput();
});
seven.addEventListener('click',()=>{
    addseven();
});
nine.addEventListener('click',()=>{
    addnine();
});
eight.addEventListener('click',()=>{
    addeight();
});
six.addEventListener('click',()=>{
    addsix();
});
five.addEventListener('click',()=>{
    addfive();
});
four.addEventListener('click',()=>{
    addfour();
});
three.addEventListener('click',()=>{
    addthree();
});
two.addEventListener('click',()=>{
    addtwo();
});
one.addEventListener('click',()=>{
    addone();
});
szero.addEventListener('click',()=>{
    addzero();
});
dzero.addEventListener('click',()=>{
    adddoublezero();
});
dot.addEventListener('click',()=>{
    adddot();
});
multip.addEventListener('click',()=>{
    addmulip();
});
divi.addEventListener('click',()=>{
    adddivi();
});
mod.addEventListener('click',()=>{
    addmode();
});
additi.addEventListener('click',()=>{
    addadditi();
});
subs.addEventListener('click',()=>{
    addsubs();
});






// Adding Numbers
function clearInput() {
    ip.value ="";
}
function delInput() {
    ip.value ="";
}

function addseven() {
    ip.value +="7";
}

function addnine() {
    ip.value +="9";
}
function addeight() {
    ip.value +="8";
}
function addsix() {
    ip.value +="6";
}
function addfive() {
    ip.value +="5";
}
function addfour() {
    ip.value +="4";
}
function addthree() {
    ip.value +="3";
}
function addtwo() {
    ip.value +="2";
}
function addone() {
    ip.value +="1";
}
function addzero() {
    ip.value +="0";
}
function adddoublezero() {
    ip.value +="00";
}
function equalFunc(result) {
    ip.value = `${result}`;
}


// Adding Operators

function adddot() {
    ip.value +=".";
}
function addmode() {
    ip.value +="%";
}
function adddivi() {
    ip.value +="/";
}
function addmulip() {
    ip.value +="*";
}
function addadditi() {
    ip.value +="+";
}
function addsubs() {
    ip.value +="-";
}





// Perform Operations


let valOnDisplay = ip.value;
let result;

equal.addEventListener('click', () => {
    let valOnDisplay = ip.value;
    let result;

    if (valOnDisplay.includes("+")) {
        let [a, b] = valOnDisplay.split("+");
        result = Number(a) + Number(b);
    } 
    else if (valOnDisplay.includes("-")) {
        let [a, b] = valOnDisplay.split("-");
        result = Number(a) - Number(b);
    } 
    else if (valOnDisplay.includes("*")) {
        let [a, b] = valOnDisplay.split("*");
        result = Number(a) * Number(b);
    } 
    else if (valOnDisplay.includes("/")) {
        let [a, b] = valOnDisplay.split("/");
        result = Number(a) / Number(b);
    } 
    else if (valOnDisplay.includes("%")) {
        let [a, b] = valOnDisplay.split("%");
        result = Number(a) % Number(b);
    }

    equalFunc(result);
});