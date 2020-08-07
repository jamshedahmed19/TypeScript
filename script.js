var inputs = document.querySelectorAll("input");
console.log(inputs);
var age = 30;
//we can't change the data type of variable once its defined
//age = '30';
//javascript function: we can't define the data type of parameter
// let percentage = (marks) => {
//     return (marks * 100) / 200;
// }
//typescript function: we can define the data type of parameter
var percentage = function (marks) {
    return (marks * 100) / 200;
};
console.log(percentage(70));
var names = ["jamshed", "hammad"];
names.push("uzair");
// names.push(40);
//we can't push values of diff data types in an array but
//except if the array is initially contains the values of diff types
//then we can push diff types of values
var mixed = ["jamshed", 19, "junaid", 23];
console.log(mixed);
mixed.push("hammad", 18);
console.log(mixed);
var person = {
    name: 'jamshed',
    address: 'karachi',
    age: 30
};
//we can't change types of the object properties
//person.age = '19';
//we also can't add new properties
//person.height = '170';
// person = {
//     name: 'hammad',
//     address: 'lahore',
//     age: 30,
//     height: 170
// }
console.log(person);
//Explicit types
//variables
var weight;
var month;
var isLoggedIn;
//arrays
var users = [];
//union types
var array = [];
var uid;
uid = 'qwerty';
uid = '787898';
//objects
var animal;
var product;
product = {
    id: 'A1B2C3',
    weight: 70,
    price: 100000,
    stock: true
};
console.log(product);
