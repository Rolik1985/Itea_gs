function Hamburger(size, stuffing) {
    try {
        if (!size || !stuffing) {
            throw new HamburgerException('MissingData', "no size or stuffing given");
        }
        if (size.paramType != "Size" || stuffing.paramType != "Stuffing") {
            throw new HamburgerException('UncorectedParameters', "invalid size or stuffing");
        }

        this.size = size;
        this.stuffing = stuffing;
    } catch (err) {
        alert(err.name + ": " + err.message);
    }
}
//    * Класс, объекты которого описывают параметры гамбургера. 
function Parameters(type, name, price, calories) {
    this.paramType = type;
    this.paramName = name;
    this.price = price;
    this.calories = calories;
}
       /* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = new Parameters("Size", "Small", 50, 20);
Hamburger.SIZE_LARGE = new Parameters("Size", "Large", 100, 40);
Hamburger.STUFFING_CHEESE = new Parameters("Stuffing", "Cheese", 10, 20);
Hamburger.STUFFING_SALAD = new Parameters("Stuffing", "Salad", 20, 5);
Hamburger.STUFFING_POTATO = new Parameters("Stuffing", "Potato", 15, 10);
Hamburger.TOPPING_MAYO = new Parameters("Topping", "Mayo", 20, 5);
Hamburger.TOPPING_MAYO.added = false;
Hamburger.TOPPING_SPICE = new Parameters("Topping", "Spice", 15, 0);
Hamburger.TOPPING_SPICE.added = false;


Hamburger.prototype.addTopping = function (topping) {

    try {
        if (!topping) {
            throw new HamburgerException('MissingData', "no topping given");
        } else if (topping.paramType != "Topping") {
            throw new HamburgerException('UncorectedParameters', "invalid topping");
        }
        if (topping.added === true) {
            throw new HamburgerException('DuplicateTopping', `Topping ${topping.paramName} has been already added`)
        }

        if (topping.paramName == "Mayo") {
            this.toppingMayo = topping;
            topping.added = true;
        } else {
            this.toppingSpice = topping;
            topping.added = true;
        }

    } catch (err) {
        alert(err.name + ": " + err.message);
    }
}

Hamburger.prototype.removeTopping = function (topping) {
    try {
        if (!topping) {
            throw new HamburgerException('MissingData', "no topping given");
        } else if (topping.type != "Topping") {
            throw new HamburgerException('UncorectedParameters', "invalid topping");
        }
        if (topping.added === false) {
            throw new HamburgerException('MissingTopping', `Topping ${topping.paramName} was not added`)
        }

        if (topping.paramName == "Mayo") {
            delete this.toppingMayo;
            topping.added = false;
        } else {
            delete this.toppingSpice;
            topping.added = false;
        }

    } catch (err) {
        alert(err.name + ": " + err.message);
    }
}

Hamburger.prototype.getToppings = function () {
    let addedTopping = new Array(), i = 0;
    for (let prop in this) {
        if (this[prop].added === true) {
            addedTopping[i] = this[prop].paramName;
            i++;
        }
    }
    return addedTopping;
}

Hamburger.prototype.getSize = function () {
    return this.size.paramName
}

Hamburger.prototype.getStuffing = function () {
    return this.stuffing.paramName
}

Hamburger.prototype.calculatePrice = function () {
    let price = 0;
    for (let prop in this) {
        if (this[prop].price) {
            price = this[prop].price + price;
        }
    }
    return price;
}


Hamburger.prototype.calculateCalories = function () {
    let calories = 0;
    for (let prop in this) {
        if (this[prop].calories) {
            calories = this[prop].calories + calories;
        }
    }
    return calories;
}

function HamburgerException(name, message) {
    this.name = name;
    this.message = message;
}

let h1 = new Hamburger()
let h2 = new Hamburger(Hamburger.TOPPING_MAYO, Hamburger.TOPPING_MAYO)
let hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE)

// hamburger.addTopping()
// hamburger.addTopping(Hamburger.STUFFING_SALAD)
// hamburger.addTopping(Hamburger.TOPPING_MAYO)
// hamburger.addTopping(Hamburger.TOPPING_SPICE)
// console.log("price: " + hamburger.calculatePrice())
// console.log("calories: " + hamburger.calculateCalories())
// console.log("All topping: " + hamburger.getToppings().join(", "))

// hamburger.removeTopping()
// hamburger.removeTopping(Hamburger.SIZE_SMALL)
// hamburger.removeTopping(Hamburger.TOPPING_MAYO)
// hamburger.removeTopping(Hamburger.TOPPING_MAYO)
// hamburger.removeTopping(Hamburger.TOPPING_SPICE)
// console.log("price: " + hamburger.calculatePrice())
// console.log("calories: " + hamburger.calculateCalories())
// console.log("All topping: " + hamburger.getToppings().join(", "))

console.log(hamburger)