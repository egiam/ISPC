// ------------------------

//
class Car3 {
  make: string = "Generic Car";
  doors: number = 4;
}
class ElectricCar extends Car3 {
  make = "Electric Car";
  doors = 4;
}
class Truck extends Car3 {
  make = "Truck";
  doors = 2;
}
function accelerate<T extends Car3>(car: T): T {
  console.log(`All ${car.doors} doors are closed.`);
  console.log(`The ${car.make} is now accelerating!`);
  return car;
}

let myElectricCar = new ElectricCar();
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck();
accelerate<Truck>(myTruck);

// ------------------------

// Static Properties
class Car2 {
  // Properties
  private static numberOfCars: number = 0; // New static property
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
    Car2.numberOfCars++; // Increments the value of the static property
  }

  // ...
  public static getNumberOfCars(): number {
    return Car2.numberOfCars;
  }
}
// Instantiate the Car object with all parameters
let myCar1 = new Car2("Cool Car Company", "blue", 2);
// Instantiates the Car object with all parameters
let myCar2 = new Car2("Galaxy Motors", "blue", 2);
// Returns 2
console.log(Car2.getNumberOfCars());

// ------------------------

// Clases
class Car {
  // Properties
  _make: string;
  _color: string;
  _doors: number;

  // Constructor
  constructor(make: string, color: string, doors: number) {
    this._make = make;
    this._color = color;
    this._doors = doors;
  }

  // Accessors
  get make(): string {
    return this._make;
  }

  set make(make: string) {
    this._make = make;
  }

  get color() {
    return "The color of the car is " + this._color;
  }

  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }

  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }

  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  // This function performs work for the other method functions
  worker(): string {
    return this._make;
  }
}

// ------------------------

// Optional Parameters
function addNumbers3(x: number, y?: number): number {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
}

addNumbers3(1, 2); // Returns 3
addNumbers3(1); // Returns 1

// Default Parameters
function addNumbers4(x: number, y = 25): number {
  return x + y;
}

addNumbers4(1, 2); // Returns 3
addNumbers4(1); // Returns 26

// Rest Parameters
let addAllNumbers = (
  firstNumber: number,
  ...restOfNumbers: number[]
): number => {
  let total: number = firstNumber;
  for (let counter = 0; counter < restOfNumbers.length; counter++) {
    if (isNaN(restOfNumbers[counter])) {
      continue;
    }
    total += Number(restOfNumbers[counter]);
  }
  return total;
};

addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
// addAllNumbers(2, 3, "three"); // flags error due to data type at design time, returns 5

// Deconstructed object parameters
interface Message {
  text: string;
  sender: string;
}

function displayMessage({ text, sender }: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: "Christopher", text: "hello, world" });

// ------------------------

// Named Functions

function addNumbers(x: number, y: number): number {
  return x + y;
}
addNumbers(1, 2);

// Anonymous functions

let addNumbers2 = function (x: number, y: number): number {
  return x + y;
};
addNumbers2(1, 2);

let sum = function (input: number[]): number {
  let total: number = 0;
  for (let i = 0; i < input.length; i++) {
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
let addNumbers0 = function (x: number, y: number): number {
  return x + y;
};

// Arrow function
let addNumbers1 = (x: number, y: number): number => x + y;

let total2 = (input: number[]): number => {
  let total: number = 0;
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
};

// ------------------------

// Describe a JavaScript API using an interface

const fetchURL = "https://jsonplaceholder.typicode.com/posts";
// Interface describing the shape of our json data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
async function fetchPosts(url: string) {
  let response = await fetch(url);
  let body = await response.json();
  return body as Post[];
}
async function showPost() {
  let posts = await fetchPosts(fetchURL);
  // Display the contents of the first item in the response
  let post = posts[0];
  console.log("Post #" + post.id);
  // If the userId is 1, then display a note that it's an administrator
  console.log(
    "Author: " + (post.userId === 1 ? "Administrator" : post.userId.toString())
  );
  console.log("Title: " + post.title);
  console.log("Body: " + post.body);
}

showPost();

// Indexable types

interface IceCreamArray {
  [index: number]: string;
}

let myIceCream1: IceCreamArray;
myIceCream1 = ["chocolate", "vanilla", "strawberry"];
let myStr: string = myIceCream1[0];
console.log(myStr);

// ------------------------

// EXERCISE 1
interface IceCream {
  flavor: string;
  scoops: number;
}

let myIceCream: IceCream = {
  flavor: "vanilla",
  scoops: 2,
};

console.log(myIceCream.flavor);

function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + " is too many scoops!";
  } else {
    return "Your order will be ready soon!";
  }
}

console.log(tooManyScoops({ flavor: "vanilla", scoops: 5 }));

// EXERCISE 2

interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: String;
}

let myIceCream2: Sundae = {
  flavor: "vanilla",
  scoops: 2,
  sauce: "caramel",
  nuts: true,
};

function tooManyScoopsSundae(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + " is too many scoops!";
  } else {
    return "Your order will be ready soon!";
  }
}
console.log(
  tooManyScoopsSundae({ flavor: "vanilla", scoops: 5, sauce: "caramel" })
);

// ------------------------

// Interfaces
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: "Emil",
  lastName: "Andersson",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
};

// employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'

type Employee1 = {
  firstName: string;
  lastName: string;
  fullName(): string;
};

// ------------------------

/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */

let randomNumbers;
let nextNumber;
for (let i = 0; i < 10; i++) {
  nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  randomNumbers.push(nextNumber);
}

console.log(randomNumbers);

/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents 
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
   you can pass in the season by referencing an item in the enum, for example 
   Season.Fall, instead of the literal string "Fall". */

enum Season {
  Fall,
  Winter,
  Spring,
  Summer,
}

function whichMonths(season: Season) {
  let monthsInSeason: string;
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

let x;
let y;
let a;

x = "five";
y = 7;
a = x + y;

console.log(a);

/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations. 
    The resulting JavaScript should look the same as the original example when you're done. */

let firstName: string;
let lastName: string;
let fullName: string;
let age: number;
let ukCitizen: boolean;

firstName = "Rebecca";
lastName = "Smith";
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
  console.log(
    "My name is " +
      fullName +
      ", I'm " +
      age +
      ", and I'm a citizen of the United Kingdom."
  );
} else {
  console.log(
    "My name is " +
      fullName +
      ", I'm " +
      age +
      ", and I'm not a citizen of the United Kingdom."
  );
}

// ------------------------

// Matrices
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuplas
let person1: [string, number] = ["Marcia", 35];

// -----------------------

enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);

console.log(ContractStatus[employeeStatus]);

//
