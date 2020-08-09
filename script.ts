//Dynamic Types
//let age: any;
//or
let age: any = 15;
age = "25";
age = true;
//any or dynamics type work as normal js
age = [1, 2, 2, 3];
console.log(age);
age = [1, "1"];

let user: {
  name: any;
  age: any;
};

user = {
  name: 1234,
  age: "19",
};
console.log(user);
