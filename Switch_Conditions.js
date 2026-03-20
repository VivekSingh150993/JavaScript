var operation ="muld,fgtiply";
var num1= 100
var num2= 200
switch(operation){

    case "add":
        console.log("Addition :", num1+num2);
        break;
    case "multiply":
        console.log("Multiply :", num1*num2);
        break;
    case "divide":
        console.log("divide :", num1/num2);
        break;
    default:
        console.log("Invalid input")
}

console.log("#############################################")

var user = "Admin"

switch(user){
    case "Admin":
        console.log("Read and Write Permission");
        break;
    case "Teacher":
        console.log("Read Permission");
    case "Student":
         console.log("Permission Denied");
    
}