// 1. Primitive Type(String , Number , Boolean)
        let username1: string = " Sumit Kumar";
        let age : number = 23;
        let isLoggedIn : boolean = true;

// 2. Array and Tuples
// Array -> Collection of values of same data type.

    let numbers : number[] = [1,2,3,4,5];
    let strings : string[] = ["Sumit Kumar","Somya Sehgal"];

    let numbers1 : (number | string)[] =[1,"two", 3 , 4 ]; // array can contain different data type using union
    console.log(numbers1); 

    // Array Methods
    numbers1.push(6);
    console.log(numbers1);
    numbers1.pop();
    console.log(numbers1);
    console.log(numbers1.length);

    // Iterating over an array
    console.log("Iterating over an array");
    for(let i  = 0 ; i < numbers1.length ; i++) // M1
    {
        console.log(numbers1[i]);
    }

    for(let item of numbers1) //  M2
    {
        console.log(item);
    }

    numbers.forEach((nbr)=> { // M3
        console.log(nbr*2);
    });

    // Array Destructure
    let [a1,b1,c1] = numbers1;
    console.log(a1 , b1 , c1);

    // Spread Operator
    let new_number = [...numbers1,"five",7];
    console.log("New number : ",new_number);

    // Array type with Interface
    interface Person {
        name: string
        age : number
    }

    let people : Person[] = [
        {name : "Sumit Kumar", age : 23},{name : "Somya Sehgal",age : 18}
    ]
    console.log(people[0]);

    // Application in Real World
    console.log("Application in real world of an array : ");

    interface Product {
        name: string
        price: number
        available: boolean
    }
    
    let products: Product[] = [
        { name: "Laptop", price: 1000, available: true },
        { name: "Phone", price: 500, available: false },
        { name: "Tablet", price: 300, available: true },
    ]
    
    // Adding a new product
    products.push({ name: "Monitor", price: 200, available: true })
    
    // Filtering available products
    let availableProducts = products.filter((product) => product.available)
    
    console.log(availableProducts)
    // Output: [
    //     { name: 'Laptop', price: 1000, available: true },
    //     { name: 'Tablet', price: 300, available: true },
    //     { name: 'Monitor', price: 200, available: true }
    // ]





// Tupple -> special types of an array , have elements of different types (Fixed-Sized)

        // ways of defining tupple
        console.log("\nWays of defining tupple");
        let tuple:[string , number]
        tuple = ["Hello",10] // show error [10,"Hello"]
        console.log(tuple[0]);

        let tuple1 : [string , number?]
        tuple1 = ["hello"] // not showing error , define number be  optional
        console.log(tuple1);

        let tuple2 : [number , ...string[]]
        tuple2 = [1,"Hello","Sumit"] // define varaible number of element
        console.log(tuple2);

        let tuple3 : [string ,number] 
        tuple3 = ["hello",20]
        let [a,b] = tuple3   // destructured tuple to extract values
        console.log(a)
        console.log(b)


        // syntax -> function function_name(tuple_name : [it's type defined] ) : function_return_type 
        function process(tuple4 :[string,number]) : void // tuple passing as parameter and return types
        {
            console.log(`String Part : ${tuple4[0]}`);
            console.log(`Number Part : ${tuple4[1]}`);
        }
        process(["Sumit",30]);


        // Real world example 
        // each action consist of username and timestamps
        type log_entry  = [username : string , TimeStamp : number] // define structure of log_entry

        let log : log_entry = ["Sumit Kumar",1586] // log is instance which accept 'log_entry' data type .

        function log_proceed(tuple_name : log_entry) : void
        {
            console.log(`Login by Emplyee : ${tuple_name[0]} , Id : ${tuple_name[1]}`);
            
        }

        log_proceed(log)

// 3. Enum (Define a set of name constants)
        console.log("\nEnum ");

        enum  Traffic_light
        {
            Red = "red",
            Yellow = "yellow",
            Green = "green",
        }

        // 1 . make variable : type_of_data =  ( access key with help of enum variable) 
        let move : Traffic_light = Traffic_light.Red;
        console.log(move);
        console.log(Traffic_light.Yellow);

        function get_light_duration(light : Traffic_light) : number
        {
            switch(light)
            {
                case Traffic_light.Red:
                    return 30;
                case Traffic_light.Yellow:
                    return 5;
                case Traffic_light.Green:
                    return 25;
                default :
                    return 0; 
            }
        }

        console.log(`Red light duration    : ${get_light_duration(Traffic_light.Red)} seconds`);
        console.log(`Yellow light duration : ${get_light_duration(Traffic_light.Yellow)} seconds`);
        console.log(`Green light duration  : ${get_light_duration(Traffic_light.Green)} seconds`);


//4 . Any -> (A type that hold any value) . Useful when you don't know type of variable
        console.log("\nAny , Unknown and Void")

        let random_varibale : any = 10;
        console.log(random_varibale);

        random_varibale = true;
        console.log(random_varibale);

    // Unknown -> (similar to `any`) but with more type safety . 
        let value : unknown
        value = 42
        value = "Hello , World !"

        function printvalue(val : unknown) : void 
        {
            if(typeof val === "string")
            {
                console.log(val.toUpperCase())
            } else if (typeof val === "number")
            {
                console.log(val.toFixed(2));
            }
            else
            {
                console.log("Unknown Type")
            }
        }

        printvalue("TypeScript")
        printvalue(3.14)
    
    // Void -> function perform action but donot produce a result.

        function log_message(message : string) : void
        {
            console.log(message);
        }

        log_message("This function doesn't return anything")

// 5 . NULL & Undefined

        console.log("\nNull and Undefined")
        // NULL -> represent intentional absence of any object value
        // undefined -> represent unintialized value 

        let nullable_value : string | null = null;
        console.log(nullable_value);
        nullable_value = "Now , It is string !";
        console.log(nullable_value);

        let undefined_value : number | undefined = undefined;
        console.log(undefined_value)
        // undefined_value = 1586
        // console.log(undefined_value)

