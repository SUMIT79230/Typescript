// 1 . Union ('|')  and Intersection Type

    // Union Type - (value can be more than one type)

        let value : string | number ;
        value = "Sumit Kumar";
        value = 23;
        console.log(value,typeof(value));

        function printId(id : string | number)
        {
            if(typeof id == "string")
            {
                console.log(`Id is string : ${id.toUpperCase()}`);
            }
            else
            {
                console.log(`Id is number : ${id}`);
            }
        }

        printId("emp12");
        printId(1586);

    // Intersection Type - (Combine multiple type into single type which inherit all properties of existing types to new one)

        type Employee = {
            name : string;  //  Id is string : EMP12
            age  : number;  //  Id is number : 1586
        };

        type Manager = {
            department : string;
        };

        type Manager_employee =  Employee & Manager; // all properties of Manager and Employee be taken

        const manager : Manager_employee = {
            name : "Sumit Kumar",
            age : 23,
            department : "Frontend Development"
        };

        console.log(manager); // { name: 'Sumit Kumar', age: 23, department: 'Frontend Development' }


// 2. Type Alias   -> basically used to define a variable to any kind like (primitive , union  and intersection)
//    Literal Type -> set of specific values can holded by variable

        type status = "Success" | "Error" | "Loading"; // Type alias (union)
        type Response = {
            Status : status;   
            message : string;
        }; // response is also a type of type alias ,Status must be one value of status and message be string

       const sucessResponse : Response = {
            Status  : "Success", // one of literal value
            message : "Data Loaded Successfully"
       };

       const errorResponse : Response = {
            Status  : "Error",
            message : "Failed to load data"
       };

    //    const invalidResponse : Response = {
    //         Status : "failed",
    //         message : "Operation Failed"
    //    }; // show error because "failed" is not valid value for status

       console.log(sucessResponse); //{ Status: 'Success', message: 'Data Loaded Successfully' }








