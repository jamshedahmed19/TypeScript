//in Typscript we can predefine a functions structure
let calc: (a: number, b: number, action: string) => number;
calc = (n1: number, n2: number, action: string) => {
    if(action === 'add'){
        return n1 + n2;
    }else{
        return n1 - n2;
    }
}
console.log(calc(2,10,'add'));

//ex#02
type personDetails = {name: string, age: number | string};
let user: (person: personDetails) => void;
user = (person: personDetails) => {
    console.log(`${person.name} is ${person.age} years old`)
}
user({name:'jamshed',age: 19});