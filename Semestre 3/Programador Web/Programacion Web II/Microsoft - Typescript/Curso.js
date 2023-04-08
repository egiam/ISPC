// ------------------------
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Static Properties
var Car2 = /** @class */ (function () {
    // Constructor
    function Car2(make, color, doors) {
        if (doors === void 0) { doors = 4; }
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car2.numberOfCars++; // Increments the value of the static property
    }
    // ...
    Car2.getNumberOfCars = function () {
        return Car2.numberOfCars;
    };
    // Properties
    Car2.numberOfCars = 0; // New static property
    return Car2;
}());
// Instantiate the Car object with all parameters
var myCar1 = new Car2("Cool Car Company", "blue", 2);
// Instantiates the Car object with all parameters
var myCar2 = new Car2("Galaxy Motors", "blue", 2);
// Returns 2
console.log(Car2.getNumberOfCars());
// ------------------------
// Clases
var Car = /** @class */ (function () {
    // Constructor
    function Car(make, color, doors) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
    Object.defineProperty(Car.prototype, "make", {
        // Accessors
        get: function () {
            return this._make;
        },
        set: function (make) {
            this._make = make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return "The color of the car is " + this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        set: function (doors) {
            if (doors % 2 === 0) {
                this._doors = doors;
            }
            else {
                throw new Error("Doors must be an even number");
            }
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    Car.prototype.accelerate = function (speed) {
        return "".concat(this.worker(), " is accelerating to ").concat(speed, " MPH.");
    };
    Car.prototype.brake = function () {
        return "".concat(this.worker(), " is braking with the standard braking system.");
    };
    Car.prototype.turn = function (direction) {
        return "".concat(this.worker(), " is turning ").concat(direction);
    };
    // This function performs work for the other method functions
    Car.prototype.worker = function () {
        return this._make;
    };
    return Car;
}());
// ------------------------
// Optional Parameters
function addNumbers3(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x + y;
    }
}
addNumbers3(1, 2); // Returns 3
addNumbers3(1); // Returns 1
// Default Parameters
function addNumbers4(x, y) {
    if (y === void 0) { y = 25; }
    return x + y;
}
addNumbers4(1, 2); // Returns 3
addNumbers4(1); // Returns 26
// Rest Parameters
var addAllNumbers = function (firstNumber) {
    var restOfNumbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfNumbers[_i - 1] = arguments[_i];
    }
    var total = firstNumber;
    for (var counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
function displayMessage(_a) {
    var text = _a.text, sender = _a.sender;
    console.log("Message from ".concat(sender, ": ").concat(text));
}
displayMessage({ sender: "Christopher", text: "hello, world" });
// ------------------------
// Named Functions
function addNumbers(x, y) {
    return x + y;
}
addNumbers(1, 2);
// Anonymous functions
var addNumbers2 = function (x, y) {
    return x + y;
};
addNumbers2(1, 2);
var sum = function (input) {
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(sum([1, 2, 3]));
// Arrow functions
// Anonymous function
var addNumbers0 = function (x, y) {
    return x + y;
};
// Arrow function
var addNumbers1 = function (x, y) { return x + y; };
var total2 = function (input) {
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
// ------------------------
// Describe a JavaScript API using an interface
var fetchURL = "https://jsonplaceholder.typicode.com/posts";
function fetchPosts(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, body;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    body = _a.sent();
                    return [2 /*return*/, body];
            }
        });
    });
}
function showPost() {
    return __awaiter(this, void 0, void 0, function () {
        var posts, post;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchPosts(fetchURL)];
                case 1:
                    posts = _a.sent();
                    post = posts[0];
                    console.log("Post #" + post.id);
                    // If the userId is 1, then display a note that it's an administrator
                    console.log("Author: " + (post.userId === 1 ? "Administrator" : post.userId.toString()));
                    console.log("Title: " + post.title);
                    console.log("Body: " + post.body);
                    return [2 /*return*/];
            }
        });
    });
}
showPost();
var myIceCream1;
myIceCream1 = ["chocolate", "vanilla", "strawberry"];
var myStr = myIceCream1[0];
console.log(myStr);
var myIceCream = {
    flavor: "vanilla",
    scoops: 2,
};
console.log(myIceCream.flavor);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + " is too many scoops!";
    }
    else {
        return "Your order will be ready soon!";
    }
}
console.log(tooManyScoops({ flavor: "vanilla", scoops: 5 }));
var myIceCream2 = {
    flavor: "vanilla",
    scoops: 2,
    sauce: "caramel",
    nuts: true,
};
function tooManyScoopsSundae(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + " is too many scoops!";
    }
    else {
        return "Your order will be ready soon!";
    }
}
console.log(tooManyScoopsSundae({ flavor: "vanilla", scoops: 5, sauce: "caramel" }));
var employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};
// ------------------------
/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */
var randomNumbers;
var nextNumber;
for (var i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}
console.log(randomNumbers);
/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so
   you can pass in the season by referencing an item in the enum, for example
   Season.Fall, instead of the literal string "Fall". */
var Season;
(function (Season) {
    Season[Season["Fall"] = 0] = "Fall";
    Season[Season["Winter"] = 1] = "Winter";
    Season[Season["Spring"] = 2] = "Spring";
    Season[Season["Summer"] = 3] = "Summer";
})(Season || (Season = {}));
function whichMonths(season) {
    var monthsInSeason;
    switch (season) {
        case Season.Fall:
            monthsInSeason = "September to November";
            break;
        case Season.Winter:
            monthsInSeason = "December to February";
            break;
        case Season.Spring:
            monthsInSeason = "March to May";
            break;
        case Season.Summer:
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}
console.log(whichMonths(Season.Fall));
/* EXERCISE 2
   TODO: Run the code as is and then modify it to have strongly typed variables.
   Then, address any errors you find so that the result returned to a is 12. */
var x;
var y;
var a;
x = "five";
y = 7;
a = x + y;
console.log(a);
/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations.
    The resulting JavaScript should look the same as the original example when you're done. */
var firstName;
var lastName;
var fullName;
var age;
var ukCitizen;
firstName = "Rebecca";
lastName = "Smith";
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;
if (ukCitizen) {
    console.log("My name is " +
        fullName +
        ", I'm " +
        age +
        ", and I'm a citizen of the United Kingdom.");
}
else {
    console.log("My name is " +
        fullName +
        ", I'm " +
        age +
        ", and I'm not a citizen of the United Kingdom.");
}
// ------------------------
// Matrices
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuplas
var person1 = ["Marcia", 35];
// -----------------------
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
var employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
//
