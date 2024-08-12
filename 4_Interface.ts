// Interface : used to define structure of objects, including their properties and methods.

// 1. Defining the Shape of Objects
// used to specify what properties and methods an object should have. 

interface Person // new interface name 'Person'
{
    name: string; // define properties with its type
    age:number;
    greet() : string; // define method , return type string
}

// 2. Implementation an Interface (using Interface in class)
// A class can implement an interface by using the implements keyword.
class Student implements Person  // Student class implements the Person interface
{
    name : string;
    age : number;

    constructor(name : string,age : number) // name and age properties defined in constructor
    {
        this.name = name;
        this.age = age;
    }

    greet():string
    {
        return `Hello , my name is ${this.name}`;
    }
}

let student1 = new Student("Sumit Kumar",23);
console.log(student1.name);
console.log(student1.greet());


// 3. Optional Properties in Interface : sometime not all properties are required

interface Car{
    brand : string,
    model : string,
    year ?: number;
}

const mycar : Car = {
    brand : "Toyota",
    model : "Corolla"  // if ? is not present here then it show error 
};

console.log(mycar.brand,mycar.model);
 
// 4 . Readonly Properties In Interface : Help to prevent modification of properties

interface Book
{
    readonly title : string,
    author : string
}

const Mybook : Book = {
    title : "Typescript Book",
    author : "Sumit Kumar"
};

// Mybook.title = "V1"; 
console.log(Mybook.title);

// 5. Extending Interface -> Interface(Employee) which can extends other defined/Existing Interface(Person)

interface Employee extends Person
{
    employeeid : number;
}

class Developer implements Employee
{
    name : string;
    age : number;
    employeeid: number; 

    constructor(name: string,age:number,employeeid : number)
    {
        this.name = name;
        this.age = age;
        this.employeeid = employeeid; 
    }

    greet() : string
    {
        return `Hello , My name is ${this.name} and my employeeId is ${this.employeeid}`;
    }
}

let Dev = new Developer("Sumit Kumar",23,1586);
console.log(Dev.greet());

// 6. Define function
// a. Using 'Type Alias' : It describe shape of function ,( taking parameter and return type)

type Greetfunction = (name : string) => string; // type alias

const greet : Greetfunction = (name:string) : string => // greet function is defined using alias taking function as parameter
{
    return `Hello , ${name}`;
}

console.log(greet("Sumit Kumar"));


// b. Using 'Interface'

interface Greetfunction1
{
    (name:string) : string;
}

const greet1 : Greetfunction = (name : string) : string => // greet is function takes function which is consisting name(string) as parameter
{
    return `Hello , ${name}`;
};

console.log(greet1("Sumit"))


// 'Alias Type ' vs  'Interface Type'
// When to Use Type Alias: Use a type alias for a simple function type or when combining complex types (e.g., union types).
// Type aliases are generally more concise for function types.

// When to Use Interface:
// Use an interface when defining objects with both properties and methods, or when you need to extend or implement multiple types.
// Interfaces are better for defining the shape of an object that includes functions as part of the object structure.