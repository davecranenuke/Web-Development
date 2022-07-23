var guestList = ["Angela", "Jack", "James", "Lara", "Jason"];

function checkGuestList(name, guestList) {
    var correctedCaseName = correctedCase(name);
    if (guestList.includes(correctedCaseName)) {
        return "Open the door and let them in...oh yeah!"
    } else {
        return "Do not let them in!!!  They are not friends of Auntie Gin."
    }
}

function correctedCase(nameSent) {
    correctedCase = nameSent.slice(0,1).toUpperCase() + nameSent.slice(1).toLowerCase();
    console.log(correctedCase);
    return correctedCase;
}

guestName = prompt("Enter the guest's name ");

checkGuestList(guestName, guestList);
