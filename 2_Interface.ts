// Interface : used to define the shape and structure of objects, including their properties and methods.

// 1. Defining the Shape of Objects
// used to specify what properties and methods an object should have. 

interface Person // new interface name 'Person'
{
    name: string; // define properties with its type
    age:number;
}

let sumit : Person = { // variable name sumit of type person
    name:"Sumit Kumar",
    age : 22
};

console.log(sumit.name);
// since object matches the shape defined by 'person' interface .

// 2. Creating Contracts for classes.
// This ensures that the class implements the required properties and methods. 

interface Greetable  //define interface to provide 'greet' method
{
    greet() : void; // greetable interface ensure have method greet (no parameter and not return a value)
}

class Greeter implements Greetable
{ // Greeter class implement Greetable interface
    greet()
    {
        console.log("Hello everyone !");
    }
}

// 3. Extending Interfaces


const formal = new Greeter();
formal.greet();