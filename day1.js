// how to do async js and what is callback and  what is callback hell
// setTimeout function use 
// promises padhna hai


// setTimeout( () =>{
// console.log("hello their")
// },5000)

// console.log(" you are so \"nice"")

var watzmyname = "javascript is fun";
console.log(watzmyname);
console.log(watzmyname.length);
console.log(watzmyname.toUpperCase());
console.log(watzmyname.toLowerCase());
console.log(watzmyname.indexOf("is"));
console.log(watzmyname.lastIndexOf("is"));
console.log(watzmyname.slice(0, 10));
console.log(watzmyname.slice(0, 10).toUpperCase());
console.log(watzmyname.replace("fun", "awesome"));
console.log(watzmyname.split(" "));
console.log(watzmyname.split(" ").reverse());
console.log(watzmyname.split(" ").reverse().join(" "));
console.log(watzmyname.split(" ").reverse().join(" ").toUpperCase());
console.log(watzmyname.split(" ").reverse().join(" ").toUpperCase().replace("AWESOME", "AWESOME!"));
console.log(watzmyname.split(" ").reverse().join(" ").toUpperCase().replace("AWESOME", "AWESOME!").charAt(0));
console.log(watzmyname.concat(" is a programming language"));
console.log(watzmyname.substring(0, 10));
console.log(watzmyname.substr(0, 10));
console.log(watzmyname.startsWith("javascript"));
console.log(watzmyname.endsWith("fun"));
console.log(watzmyname.includes("is"));
console.log(watzmyname.includes("fun"));
console.log(watzmyname.includes("awesome"));
console.log(watzmyname.includes("awesome", 10));
console.log(watzmyname.includes("awesome", 20));


var isitcool = Boolean(3 > 2);
console.log(isitcool);

var b = 1;

var a = b += c =5 ;
console.log(a);

//functions 

// 1. Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
  }
  console.log(greet("Alice")); // Hello, Alice!
  
  // 2. Function Expression (Anonymous Function)
  const sayBye = function(name) {
    return "Goodbye, " + name + "!";
  };
  console.log(sayBye("Bob")); // Goodbye, Bob!
  
  // 3. Arrow Function (Shorter syntax)
  const add = (a, b) => a + b;
  console.log(add(5, 3)); // 8
  
  // 4. Immediately Invoked Function Expression (IIFE)
  (function () {
    console.log("This runs immediately!");
  })(); // Outputs: This runs immediately!
  
  // 5. Default Parameters
  function multiply(a, b = 2) {
    return a * b;
  }
  console.log(multiply(5)); // 10
  
  // 6. Rest Parameters (...args)
  function sumAll(...nums) {
    return nums.reduce((sum, num) => sum + num, 0);
  }
  console.log(sumAll(1, 2, 3, 4)); // 10
  
  // 7. Callback Functions (passing functions as arguments)
  function doMath(a, b, operation) {
    return operation(a, b);
  }
  const subtract = (x, y) => x - y;
  console.log(doMath(10, 4, subtract)); // 6
  
  // 8. Higher Order Function (returns another function)
  function createMultiplier(multiplier) {
    return function (num) {
      return num * multiplier;
    };
  }
  const double = createMultiplier(2);
  console.log(double(8)); // 16
  
  // 9. Recursion (function calling itself)
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(5)); // 120
  
  // 10. Async Function
  async function fetchData() {
    return "Data fetched!";
  }
  fetchData().then(data => console.log(data)); // Data fetched!
  
  // 11. setTimeout (delays execution)
  setTimeout(() => {
    console.log("Executed after 2 seconds");
  }, 2000);
  
  // 12. setInterval (repeats execution every interval)
  const intervalId = setInterval(() => {
    console.log("Repeats every second");
  }, 1000);
  // clearInterval(intervalId); // Use to stop the interval
  
  // 13. Function with `this` keyword (in objects)
  const person = {
    name: "John",
    greet: function() {
      console.log("Hi, I'm " + this.name);
    }
  };
  person.greet(); // Hi, I'm John
  
  // 14. Arrow function does not bind `this`
  const person2 = {
    name: "Jane",
    greet: () => {
      console.log("Hi, I'm " + this.name); // `this` is not person2 here
    }
  };
  person2.greet(); // Hi, I'm undefined
  
  // 15. Function Constructor (not recommended for modern JS)
  const Car = new Function("make", "model", "this.make = make; this.model = model;");
  const car1 = new Car("Toyota", "Corolla");
  console.log(car1.make); // Toyota
  