// const fs = require("fs");

// fs.readFile("./a.txt","utf-8" , (err,data) => {
//     if (err) throw err;
//     console.log(data);
// });
// import { randomSuperhero } from "superheroes";
// const name = randomSuperhero();

// import sillyname from 'sillyname';
// var name = sillyname();
// console.log(name);
// console.log(`My name is ${sillyname()}.`);


function greetuser(name) {
    // This function returns another function that greets the user
    return function() {
        console.log("hello, " + name);
    };
    // The inner function has access to the `name` variable from the outer function's scope
}

const greetalice = greetuser("alice");
greetalice();





