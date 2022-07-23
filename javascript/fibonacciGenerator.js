function fibonacciGenerator(n) {
    var output = [];
    for(var i = 0; i <=n; i++) {
        if(i < 2) {
            output[i] = i;
        } else {
            output[i] = output[i-2] + output[i-1];
        }
    }
    console.log(output);
}

fibonacciGenerator(10);
