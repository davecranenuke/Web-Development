function whosPaying(names) {

/******Don't change the code above*******/

    //Write your code here.
    selectedName = nameList[Math.floor(Math.random()*nameList.length)];
    return (selectedName + " is going to buy lunch today!");
/******Don't change the code below*******/
}

var nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(nameList));
