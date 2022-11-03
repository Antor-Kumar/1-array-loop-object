// Write a program using simple for loop.
string ="";
for(let x = 1; x <= 20; x++){
    string = string + x;
    console.log(string);
}

//write a program using for-of loop.

let num =[5,7,8,10];
for(let x of num){
    console.log(x);
}

//write a program using for-in loop.
let carName={
    a:"BMW",
    b:"Audi",
    c:"Volvo",
    d:"Ferrari",
    f:"Ford"
}
for(let key in carName){
    console.log(`${key}:${carName[key]}`);
}