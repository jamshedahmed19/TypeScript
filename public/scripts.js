"use strict";
//when we select element in Typscript it gives an error if
//we try to access any property of that element
// const anchor = document.querySelector('a');
// console.log(anchor);
// console.log(anchor.href);
//because Typescript don't know whether that element exist
//so we can over come this problem by using conditional statment or
//by adding exclamation mark
// const anchor = document.querySelector("a");
// if (anchor) {
//   console.log(anchor.href);
// }
var anchor = document.querySelector("a");
console.log(anchor);
console.log(anchor.href);
//Typscript knows the element type if we hover over anchor it
//show its elemet type it is usefull because then if we use that
//anchor tag it will only give those properties and methods related to it
console.log(anchor.tagName);
//if we select an element by class name then ts can't know element type of that class
//so we can type cast it by ourselves by using as keyword and then we don't to use ! sign
//const form = document.querySelector('form');
var form = document.querySelector(".new-item-form");
console.log(form.children);
//selecting inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
