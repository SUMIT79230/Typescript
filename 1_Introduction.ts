// Defination
// a statically typed superset of JavaScript 
// TypeScript code needs to be compiled into JavaScript to be run in a browser or on a server.
// Static typing means that type checking is done at compile time rather than at runtime.

// Syntax: TypeScript allows you to specify the types of variables, function parameters, and return values using type annotations.

// 1. Variable Type Annotations
// used to specify the type of a variable when you declare it. This helps ensure that the variable is only assigned values of the specified type.

// Syntax :  let variablename : datatype;
let username : string = 'Sumit Kumar';
console.log(username);

// 2. Function Parameter Type Annotations
// Type annotations can be applied to function parameters to specify what type of arguments the function should accept.

// syntax -> function function_name(parameter_name : type): returntype{   }

function greet(name : string):string{
    return `Hello , ${name}`;
}
console.log(greet('Sumit'));


// 3 . Objects and Arrays:
let detail :{name : string;age:number} = {
    name: 'Sidharth Shukla',
    age : 22
};

console.log(`${detail.name} , ${detail.age}`);

// TypeScript can automatically infer the type of a variable based on the value assigned to it.
// method 1 : automatically infer the type
 let isactive = true;
 console.log(typeof(isactive));

// method 2 : provide explicit type regardless of assigned value
let isactive1 : boolean = true;
console.log(typeof(isactive));