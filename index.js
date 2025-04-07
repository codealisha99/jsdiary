import Chalk from 'chalk';

var movie = "the godfather"; 

function showgoodmovie() {
    alert("I love " + movie);
}
function showbadmovie() {
    movie ="jumanji"
    alert("I hate " + movie);
}
console.log(Chalk.blue("Hello world!"));