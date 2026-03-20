//Create a loop to print value from 1 to 10
for(var i=1; i<=10; i++){
    console.log(i)
}

console.log("##########################################")

//create a loop to print value from 1 to 10 with 2 value difference.

for(var i = 1; i <=10; i+=2){

    console.log(i)
}

console.log("#######################")
//show value in reverse order

for(var i=5; i>=0; i--){
    console.log(i)
}

console.log("########################")

// write if condition in the loop, get all the number which are divisible by 3 and 5 between 0 to 100.
//WAP to check given number is prime or not

var num = 12
var prime = true
for(var i = 2; i<num; i++)
{
    console.log(i)
    if(num%i == 0){
        prime = false
    break;
    }
}

if(prime == true){

    console.log("This is a prime number :", num)
}else{
    console.log("This is not a prime num", num)
}
console.log("########################")
//get all the prime number from 1 to 100

for(var num=1; num<=100; num++)
{
    var prime = true
    for( var i =2; i<num; i++){
        if(num%i == 0){

            prime = false;
            break;
        }
    }
    if(prime == true){
        console.log(num)
    }
}
console.log("########################")

// While loop: This loop works with condition.

n1= 1
while(n1<=10){
    console.log(n1)
    n1 +=1
}