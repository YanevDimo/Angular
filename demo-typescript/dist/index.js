"use strict";
//Basic types
Object.defineProperty(exports, "__esModule", { value: true });
let id = 5;
let company = 'Amazon';
let isPublish = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Helo'];
//Tuple
let person = [1, 'Brad', true];
//Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [2, 'Jill']
];
//Union
let productId;
productId = 22;
productId = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Rigth"] = 3] = "Rigth";
})(Direction1 || (Direction1 = {}));
//показва индекса от 0(default)
//при промяна на index всички се пренареждат(Up = 1, Down = 2, Left = 3, ...)
console.log(Direction1.Down);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Rigth"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//Function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x + y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} id now registered`;
    }
}
const brad = new Person(1, 'Mike');
console.log(brad);
class Employee {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// Subclasses
class Student extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const std = new Student(3, 'Kiko', 'Developer');
console.log('position ' + std.position);
console.log(std.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Kiko', 'Domi', 'Jil']);
strArray.push('hello');
numArray.push(1, 2, 3);
