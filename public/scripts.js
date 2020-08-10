"use strict";
var greet;
//greet = "hello, WORLD"
greet = function () {
    console.log("Hello WORLD");
};
greet();
//we can make paramters optional, but if we don't pass down the parameter
//it will be undefined, so we can give a default value to parameter instead
//of making them optional
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
var sub = function (a, b, c) {
    if (c === void 0) { c = 20; }
    console.log(a - b);
    console.log(c);
};
//but if we pass down the value it will over ride the default value
add(2, 5);
sub(2, 5);
sub(2, 5, 10);
//Note: we can't give optional and default values together
//c?: number  = 20 but instead c: number  = 20, c?: number
//we can define the return type but,
//Typsrcipt automatically determine the return type of the function 
var minus = function (a, b) {
    return a - b;
};
var result = minus(8, 4);
//but if function don't return any value it will be void type
