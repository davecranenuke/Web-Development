function Housekeeper(name, age, cleaningRepertoire) {
    this.name = name;
    this.age = age;
    this.cleaningRepertoire = cleaningRepertoire;
    this.moveSuitcase = function() {
        alert("May I take your suitcase?");
    }
    this.clean = function() {
        alert("Cleaning " + this.cleaningRepertoire[0]);
    }
}

housekeeper1 = new Housekeeper("Remmi", 45, ["stateroom", "bathroom"]);

console.log(housekeeper1.name, housekeeper1.age);
housekeeper1.moveSuitcase();
housekeeper1.clean();
