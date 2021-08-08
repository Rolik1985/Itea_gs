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
  