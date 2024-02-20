//Basic types

import { isJSDocThisTag } from "typescript";

let id: number = 5;
let company: string = 'Amazon';
let isPublish: boolean = true;
let x : any = 'Hello';

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true,'Helo']

//Tuple
let person: [number,string,boolean] = [1,'Brad',true]
//Tuple Array
let employee: [number,string][]
employee =[
    [1,'Brad'],
    [2,'John'],
    [2,'Jill']
]

//Union
let productId: string | number
productId = 22
productId = '22'

//Enum

enum Direction1{
    Up,
    Down,
    Left,
    Rigth
}
//показва индекса от 0(default)
//при промяна на index всички се пренареждат(Up = 1, Down = 2, Left = 3, ...)
console.log(Direction1.Down)

enum Direction2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Rigth = 'Right'
}
console.log(Direction2.Down)

//Objects
type User = {
    id: number,
    name: string
}
const user: User = {
  id: 1,
  name: 'John'
}

//Type Assertion

let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

//Function
function addNum(x: number,y: number): number{
    return x + y
}
console.log(addNum(1, 2))
//Void
function log(message: string | number): void{
    console.log(message)
}

//Iterface
interface UserInterface  {
    readonly id: number,
    name: string
    age?: number
}
const user1: UserInterface = {
    id: 1,
    name: 'John'
}

interface MathFunc{
    (x: number, y: number): number
}
const add: MathFunc = (x: number,y: number): number => x + y
const sub: MathFunc = (x: number,y: number): number => x + y

interface PersonInterface {
    id: number,
    name: string
    register(): string
}


//Classes
class Person{
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
        
    }
    register(){
        return `${this.name} id now registered`
    }
}
const brad = new Person(1,'Mike')
console.log(brad)


class Employee implements PersonInterface{
    id: number;
    name: string;

    constructor(id: number, name: string) {
    this.id = id,
    this.name = name
   }
   register() {
       return`${this.name} is now registered`
   }
 }
// Subclasses
 class Student extends Person{
    position: string

    constructor(id: number,name: string, position: string){
        super(id,name)
        this.position = position

    }
 }
 const std = new Student(3,'Kiko','Developer')
console.log('position ' + std.position)
console.log(std.register())

//Generics

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}
let numArray  = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Kiko','Domi','Jil'])

strArray.push('hello')
numArray.push(1,2,3)


console.log(null || 'string')