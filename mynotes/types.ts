// string
let myname = 'Rik';  // automatic type to string

// nyname = 23; // error

//number
let age = 26;
age = 26.5;

// boolean
let boo = true;
// boo = 1 // error

// assign types
let mynumber:number;  // default any
let mynumber1 = 1;
let mynumber2:number = 1;

//array
let myarray = ['1', '2']; // string[]
// myarray = [100]; // error

let myarray1: any[] = ['1', '2']; 

// tuples
let address: [string, number] = ["street", 99];

// enums
enum Color {
    Gray,       // 0
    Green,      // 1
    Blue = 100, // 100
    Red         // 101
}
let myColor: Color = Color.Green;

//any
let car: any = 'string';
car = 2;
car = {prop: '1'};


// functions
function mynamef(param:string) : string {
    return 's';
}
function noop() : void {
    console.log();
}

// function type
let myFnc : (a:number, b:number) => number;

// objects
let userData = {
    name: 'Rik',
    age: 26
};
//userData = {  // error
//    a: 'Rik',
//    b: 26
//};

let userData1: { name: string, age: number} = {
    name: 'Rik',
    age: 26
};


// example
let complex: { data: number[], output: (all: boolean) => number[] };

complex = {
    data: [1,2,3,4],
    output: function (all:boolean): number[] {
        return this.data;
    }
}

// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2 : Complex;

// union types
let numberOrString: number | string;

// runtime type check
let value = "string";
if (typeof value == "number") {

}

// never type : funzioni che non ritornano niente (neanche void)
function neverReturn():never {
    throw new Error('error');
    
}

// nullable types
// compile option: "strictNullChecks": true
let canBeNull: number | null = 12;
let canNotBeNull = 12;

// const
const costantValue = 'fixed';


// arrow functions
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
}
const subNumbers = (number1: number, number2: number) => {
    return number1 - number2;
};
const multiplyNumbers = (number1: number, number2: number) => number1 * number2;

// default parameters
const defParams = (param1: number = 10): void => console.log(param1);

//Rest & Spread
// spread operator: ...
const numbers = [1,4,6,8]; // array
Math.max(3,4,5,5,6); // list of numbers
Math.max(...numbers); // array to list

function makeArray(...args: number[]) : number[] { // list 
    return args; //array
}
makeArray(4,5,6,67);


//Destructuring Array
const hobbies = ["Cooking", "Sport"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);


//Destructuring Object
const user_data = {username: 'Rik', age1: 20};
const {username: myName, age1: myAge} = user_data;
console.log (myName, myAge);


// Template Literals
const myName1 = "Rik";
const greeting = "Hello " + myName + " !";
const literalTemplate = `Hello
${myName}
!`;
console.log(greeting);
console.log(literalTemplate);
