// Control Flow in JavaScript


// 1. if Statement

let age = 20;

if(age >= 18){
    console.log("You can vote");
}


// 2. if...else Statement

let marks = 40;

if(marks >= 50){
    console.log("Pass");
}
else{
    console.log("Fail");
}


// 3. else if Statement

let score = 85;

if(score >= 90){
    console.log("Grade A");
}
else if(score >= 60){
    console.log("Grade B");
}
else{
    console.log("Grade C");
}


// 4. Nested Conditions

let username = "admin";
let password = "1234";

if(username === "admin"){

    if(password === "1234"){
        console.log("Login Successful");
    }
    else{
        console.log("Wrong Password");
    }

}
else{
    console.log("Wrong Username");
}


// 5. Switch Statement

let day = 3;

switch(day){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");

}


// 6. for Loop

for(let i = 1; i <= 5; i++){

    console.log(i);

}


// 7. while Loop

let i = 1;

while(i <= 5){

    console.log(i);

    i++;

}


// 8. do...while Loop

let j = 1;

do{

    console.log(j);

    j++;

}
while(j <= 5);


// 9. for...of Loop

let fruits = ["Apple", "Mango", "Banana"];

for(let fruit of fruits){

    console.log(fruit);

}


// 10. for...in Loop

let student = {
    name: "Rahul",
    age: 20,
    city: "Delhi"
};

for(let key in student){

    console.log(key, student[key]);

}


// 11. Break Statement

for(let k = 1; k <= 5; k++){

    if(k === 3){
        break;
    }

    console.log(k);

}


// 12. Continue Statement

for(let l = 1; l <= 5; l++){

    if(l === 3){
        continue;
    }

    console.log(l);

}