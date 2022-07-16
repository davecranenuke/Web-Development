name = prompt("What is your name? ");
firstLetter = name.slice(0,1).toUpperCase();
fullName = firstLetter+name.slice(1).toLowerCase();
alert("Hello " + fullName)
console.log(fullName);
