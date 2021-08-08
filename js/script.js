function Human(name, become, lang, age) {
    this.name = name;
    this.become = become;
    this.lang = lang;
    this.age = age;
}

  
Human.prototype.eldest = function(humans) {
    let maxAge = 0;
    humans.forEach(function(human) {
        if (human.age > maxAge)
          maxAge = human.age;
        });
    alert(maxAge);
};
  
let human = new Human();
let humans = [];
humans.push(new Human("Ken", "male", "eng", 28));
humans.push(new Human("Pol", "male", "eng", 22));
humans.push(new Human("July", "female", "uk", 25));
humans.push(new Human("Bill", "male", "rus", 36));
    
human.eldest(humans);


// ------------------------------------------------------------
function Human(name, become, age) {
    this.name = name;
    this.become = become;
    this.age = age;

}

var Kent = new Human('Kent', 'male', 24);
var Serh = new Human('Serh', 'male', 36);
var Maria = new Human('Maria', 'Female', 66);
var July = new Human('July', 'male', 25);
var Rudolf = new Human('Rudolf ', 'male', 19);

var People = [Kent, Serh, July, Rudolf , Maria];

for (var i = 0; i < People.length;i++) {
    document.write("Все что находится в массиве: " + People[i].name + " | " + People[i].become + " | "  + People[i].age + "<br />");
}

function SortByAge(array, order) { // order = 'asc'-по возрастанию || 'desc'-по убыванию
    if (order == "asc") {
        document.write("Находим самого взрослого кандидата!" + "<br />");
        var maxValue = Number.NEGATIVE_INFINITY;
        var maxVname = "";
        for (var i = 0; i < array.length; i++) {
            if (array[i].age > maxValue) {
                maxValue = array[i].age;
                maxVname = array[i].name;
    }
}
        return document.write("Имя: " + maxVname + "<br />" + " Возраст: " + maxValue);
} else if (order == "desc") {
        document.write("Находим самого младшего кандидата!" + "<br />");
        var minVelue = Number.POSITIVE_INFINITY;
        var minVname = "";
        for (var i = 0; i < array.length; i++) {
            if (array[i].age < minVelue) {
                minVelue = array[i].age;
                minVname = array[i].name;
}
}
        return document.write("Имя: " + minVname + "<br />" + " Возраст: " + minVelue);;
} else {
        document.write("error!");
}
};

SortByAge(People, 'asc');// order = 'asc' || 'desc'

  