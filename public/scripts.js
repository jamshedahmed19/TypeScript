"use strict";
//in Typscript we can predefine a functions structure
var calc;
calc = function (n1, n2, action) {
    if (action === 'add') {
        return n1 + n2;
    }
    else {
        return n1 - n2;
    }
};
console.log(calc(2, 10, 'add'));
var user;
user = function (person) {
    console.log(person.name + " is " + person.age + " years old");
};
user({ name: 'jamshed', age: 19 });
