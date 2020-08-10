let greet: Function;

//greet = "hello, WORLD"

greet = () => {
  console.log("Hello WORLD");
};
greet();

//we can make paramters optional, but if we don't pass down the parameter
//it will be undefined, so we can give a default value to parameter instead
//of making them optional
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};
const sub = (a: number, b: number, c: number | string = 20) => {
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
let minus = (a: number, b: number): number => {
  return a - b;
};

const result = minus(8, 4);

//but if function don't return any value it will be void type