// function Human(name, become, lang, age) {
//     this.name = name;
//     this.become = become;
//     this.lang = lang;
//     this.age = age;
// }

  
// Human.prototype.eldest = function(humans) {
//     let maxAge = 0;
//     humans.forEach(function(human) {
//         if (human.age > maxAge)
//           maxAge = human.age;
//         });
//     alert(maxAge);
// };
  
// let human = new Human();
// let humans = [];
// humans.push(new Human("Ken", "male", "eng", 28));
// humans.push(new Human("Pol", "male", "eng", 22));
// humans.push(new Human("July", "female", "uk", 25));
// humans.push(new Human("Bill", "male", "rus", 36));
    
// human.eldest(humans);


// // ------------------------------------------------------------
// function Human(name, become, age) {
//     this.name = name;
//     this.become = become;
//     this.age = age;

// }

// let Kent = new Human('Kent', 'male', 24);
// let Serh = new Human('Serh', 'male', 36);
// let Maria = new Human('Maria', 'Female', 66);
// let July = new Human('July', 'male', 25);
// let Rudolf = new Human('Rudolf ', 'male', 19);

// let People = [Kent, Serh, July, Rudolf , Maria];

// for (let i = 0; i < People.length;i++) {
//     document.write(" " + People[i].name + " | " + People[i].become + " | "  + People[i].age + "<br />");
// }

// function SortByAge(array, order) { // order = 'asc'-по возрастанию || 'desc'-по убыванию
//     if (order == "asc") {
//         document.write("Находим самого взрослого кандидата!" + "<br />");
//         let maxValue = Number.NEGATIVE_INFINITY;
//         let maxVname = "";
//         for (let i = 0; i < array.length; i++) {
//             if (array[i].age > maxValue) {
//                 maxValue = array[i].age;
//                 maxVname = array[i].name;
//     }
// }
//         return document.write("Имя: " + maxVname + "<br />" + " Возраст: " + maxValue);
// } else if (order == "desc") {
//         document.write("Находим самого младшего кандидата!" + "<br />");
//         let minVelue = Number.POSITIVE_INFINITY;
//         let minVname = "";
//         for (let i = 0; i < array.length; i++) {
//             if (array[i].age < minVelue) {
//                 minVelue = array[i].age;
//                 minVname = array[i].name;
// }
// }
//         return document.write("Имя: " + minVname + "<br />" + " Возраст: " + minVelue);;
// } else {
//         document.write("error!");
// }
// };

// SortByAge(People, 'asc');// order = 'asc' || 'desc'

// ------------------------------------------------------------------
let f1 = document.querySelector('.f1');

function one () {
    console.log('work');
}

f1.onclick = one;
f1.style.backgroundColor ="green";

let f2 = document.querySelector('.f2');
function two (){
    console.log('Haaaaaaa');
}
f2.onclick = two;

  