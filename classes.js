// class rectangle {
//     constructor(width, height , color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }


//     area()
//     {
//        const area = this.width * this.height;
//        return area;
//     }

//     paint()
//     {
//       console.log(' Painting the rectangle ${this.color} ');
//     }
// }

// const rect = new rectangle(10, 20 , 'blue');
// const area = rect.area();
// rect.paint();
// console.log(area);



// let rect =
// {
//     width: 10,
//     height: 20,
//     color: 'blue',
//     area: function() {
//         return this.width * this.height;
//     },
//     paint: function() {
//         console.log(`Painting the rectangle ${this.color}`);
//     }

// }

// function area(rect())
// {
    
// }

// console.log(rect.area());


// const map = new map();
// map.set('name', 'alisha');
// map.set('age', 25);


// const firstname = map.get('name');
// console.log(firstname);

// function waitfor3s(resolve)
// {
//     setTimeout(resolve, 3000);
// }
// //when the processor reaches here waitfor3s starts as an async function and finishes after 3000 ms and it moves forward to main

// function setTimeoutPromise()
// {
//     return new Promise(waitfor3s);
// }
// // we made a wrapper function setttimeoutpromies for waitfor3s


// function main()
// {
//     console.log("main is started");
// }

// setTimeoutPromise().then(main);


// function random()
// {
   
// };


// function callback()
// {
//     console.log("Random function is called");
// };


// let p = new Promise(random);



// p.then(callback);


// //the answer is a promise object that is pending and promise object is a placeholder for a value that is not yet available. It will be resolved or rejected in the future.

// function teamocean(resolve)
// {
//     setTimeout(resolve, 5000);
// }

// function alpha()
// {
//     return new Promise(teamocean);
// }


// let p = alpha();

// function helloagain()
// {
//     console.log("Hello again!");
// }

// p.then(helloagain);



let ctr = 1;

function stopwatch()
{
    console.clear();
    console.log(ctr);
    ctr++;

    setTimeout(stopwatch, 1000);
}

setTimeout(stopwatch, 1000);