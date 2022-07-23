//multiples of 3 print fizz
//multiples of 5 print buzz
//divisible by both print fizzbuzz

var output = [];
for(var step = 0; step < 1001; step++) {
    if(step % 3 == 0 && step % 5 == 0) {
        output.push("Fizzbuzz");
    } else if (step % 3 == 0) {
        output.push("Fizz");
    } else if (step % 5 ==0) {
        output.push("Buzz");
    } else {
        output.push(step);
    }
}
console.log(output);
