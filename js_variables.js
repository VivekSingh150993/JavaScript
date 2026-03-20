var FirstName ="John"
//var : keyword
//Firstname : varible name
// john : value storing in variable

console.log(FirstName)

var num
var num1= 30
var num3 = "Java script"
console.log("num :" , num)
console.log("num1 :" , num1)  // 30
console.log("num3 :" , num3)  // Java script

//##########################################
// var variable
/*
- Var variable can be redeclare
-user can re-assign tovar variable.
- Functiob-scope

*/

var n2 = 100 //declare
console.log("value of n2 :", n2)
var n2 = 500 //redeclare means we updated the value
console.log("value of n2 :", n2)
n2 = 1000 //re-assignment

console.log("value of n2 :", n2)

if(true)
{
    var x = 40
    console.log("variable x outside if:", x)
}

//Let Variable
/*
- blocked-scoped
- can not be re-declared in the same scope
- safer than var
*/

let UserName = "Vivek" // declare assignment

// let FirstName = "Rahi" //re-declaration is not allowed.
// console.log(FirstName)
 UserName = "Rahi" // re-assigning the new value
 console.log(UserName)

 if(true){
    let q = 200
    console.log("inside if q:" , q)
 }
 console.log("outside if q:" , q)