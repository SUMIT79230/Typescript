var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1. Primitive Type(String , Number , Boolean)
var username1 = " Sumit Kumar";
var age = 23;
var isLoggedIn = true;
// 2. Array and Tuples
// Array -> Collection of values of same data type.
var numbers = [1, 2, 3, 4, 5];
var strings = ["Sumit Kumar", "Somya Sehgal"];
var numbers1 = [1, "two", 3, 4]; // array can contain different data type using union
console.log(numbers1);
// Array Methods
numbers1.push(6);
console.log(numbers1);
numbers1.pop();
console.log(numbers1);
console.log(numbers1.length);
// Iterating over an array
console.log("Iterating over an array");
for (var i = 0; i < numbers1.length; i++) // M1
 {
    console.log(numbers1[i]);
}
for (var _i = 0, numbers1_1 = numbers1; _i < numbers1_1.length; _i++) {
    var item = numbers1_1[_i];
    console.log(item);
}
numbers.forEach(function (nbr) {
    console.log(nbr * 2);
});
// Array Destructure
var a1 = numbers1[0], b1 = numbers1[1], c1 = numbers1[2];
console.log(a1, b1, c1);
// Spread Operator
var new_number = __spreadArray(__spreadArray([], numbers1, true), ["five", 7], false);
console.log("New number : ", new_number);
var people = [
    { name: "Sumit Kumar", age: 23 }, { name: "Somya Sehgal", age: 18 }
];
console.log(people[0]);
// Application in Real World
console.log("Application in real world of an array : ");
var products = [
    { name: "Laptop", price: 1000, available: true },
    { name: "Phone", price: 500, available: false },
    { name: "Tablet", price: 300, available: true },
];
// Adding a new product
products.push({ name: "Monitor", price: 200, available: true });
// Filtering available products
var availableProducts = products.filter(function (product) { return product.available; });
console.log(availableProducts);
// Output: [
//     { name: 'Laptop', price: 1000, available: true },
//     { name: 'Tablet', price: 300, available: true },
//     { name: 'Monitor', price: 200, available: true }
// ]
// Tupple -> special types of an array , have elements of different types (Fixed-Sized)
// ways of defining tupple
console.log("\nWays of defining tupple");
var tuple;
tuple = ["Hello", 10]; // show error [10,"Hello"]
console.log(tuple[0]);
var tuple1;
tuple1 = ["hello"]; // not showing error , define number be  optional
console.log(tuple1);
var tuple2;
tuple2 = [1, "Hello", "Sumit"]; // define varaible number of element
console.log(tuple2);
var tuple3;
tuple3 = ["hello", 20];
var a = tuple3[0], b = tuple3[1]; // destructured tuple to extract values
console.log(a);
console.log(b);
// syntax -> function function_name(tuple_name : [it's type defined] ) : function_return_type 
function process(tuple4) {
    console.log("String Part : ".concat(tuple4[0]));
    console.log("Number Part : ".concat(tuple4[1]));
}
process(["Sumit", 30]);
var log = ["Sumit Kumar", 1586]; // log is instance which accept 'log_entry' data type .
function log_proceed(tuple_name) {
    console.log("Login by Emplyee : ".concat(tuple_name[0], " , Id : ").concat(tuple_name[1]));
}
log_proceed(log);
// 3. Enum (Define a set of name constants)
console.log("\nEnum ");
var Traffic_light;
(function (Traffic_light) {
    Traffic_light["Red"] = "red";
    Traffic_light["Yellow"] = "yellow";
    Traffic_light["Green"] = "green";
})(Traffic_light || (Traffic_light = {}));
// 1 . make variable : type_of_data =  ( access key with help of enum variable) 
var move = Traffic_light.Red;
console.log(move);
console.log(Traffic_light.Yellow);
function get_light_duration(light) {
    switch (light) {
        case Traffic_light.Red:
            return 30;
        case Traffic_light.Yellow:
            return 5;
        case Traffic_light.Green:
            return 25;
        default:
            return 0;
    }
}
console.log("Red light duration    : ".concat(get_light_duration(Traffic_light.Red), " seconds"));
console.log("Yellow light duration : ".concat(get_light_duration(Traffic_light.Yellow), " seconds"));
console.log("Green light duration  : ".concat(get_light_duration(Traffic_light.Green), " seconds"));
//4 . Any -> (A type that hold any value) . Useful when you don't know type of variable
console.log("\nAny , Unknown and Void");
var random_varibale = 10;
console.log(random_varibale);
random_varibale = true;
console.log(random_varibale);
// Unknown -> (similar to `any`) but with more type safety . 
var value;
value = 42;
value = "Hello , World !";
function printvalue(val) {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
    }
    else if (typeof val === "number") {
        console.log(val.toFixed(2));
    }
    else {
        console.log("Unknown Type");
    }
}
printvalue("TypeScript");
printvalue(3.14);
// Void -> function perform action but donot produce a result.
function log_message(message) {
    console.log(message);
}
log_message("This function doesn't return anything");
// 5 . NULL & Undefined
console.log("\nNull and Undefined");
// NULL -> represent intentional absence of any object value
// undefined -> represent unintialized value 
var nullable_value = null;
console.log(nullable_value);
nullable_value = "Now , It is string !";
console.log(nullable_value);
var undefined_value = undefined;
console.log(undefined_value);
// undefined_value = 1586
// console.log(undefined_value)
