// Basic Types
let user_id: number = 5
let company: string = 'My Company'
let isPublished: boolean = true
let x: any = 'Hello'


// Arrays
let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']


// Tuple
let person: [number, string, boolean] = [1, 'Bob', true]


// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'Bob'],
    [2, 'John'],
    [3, 'Jane']
]


// Union
let pid: string | number = 22
pid = '22'


// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
// console.log(Direction1.Up) // => 0
// console.log(Direction1.Left) // => 2

enum Direction2 {
    Up = 1,
    Down,
    Left,
    Right
}
// console.log(Direction1.Up) // => 1
// console.log(Direction1.Left) // => 3

enum Direction3 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}


// Objects
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'John'
}

type Animal = {
    id: number,
    name: string
}
const animal: Animal = {
    id: 1,
    name: 'Cat'
}


// Type Assertion
let cid: any = 1
let customerId_number = <number>cid // customerId_number will be a number
let customerId_string = cid as string // customerId_string will be a string


// Functions
function addNum(x: number, y: number): number {
    return x + y
}
let aaa: number = addNum(1, 2)
// let bbb: string = addNum(1,2) // => ERROR (retorno é tipo number)
// let ccc: number = addNum(1,'2') // => ERROR (parâmetro deve ser tipo number)


// Void
function log(message: string | number): void {
    console.log(message)
}


// Interfaces
interface AnimalInterface {
    id: number
    name: string
    age?: number                // OPTIONAL
    readonly uuid: string       // READ ONLY (can't be reassigned)
}
const animal1: AnimalInterface = {
    id: 1,
    name: 'Cat',
    age: 2,
    uuid: 'abc-123'
}
// animal1.age = 3              // OK
// animal1.uuid = 'def-456'     // ERROR


// Interfaces vs Types
type Point = number | string
const p1: Point = 1
// interface PointInterface = number | string // => ERRO


// Interfaces and functions
interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
// const add2: MathFunc = (x: number, y: number): number => (x + y).toString() // => ERRO
const sub: MathFunc = (x: number, y: number): number => x - y


// Classes
interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    private private_id = 1 // only accessible within the class
    protected protected_id = 2 // only accessible within the class or classes that extend it (subclasses)

    constructor(id: number, name: string) {         // run this func when class is instantiated
        // console.log('A new Person was instantiated!')
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered!`
    }
}

const brad = new Person(1, 'Brad')
// console.log(brad)
const mike = new Person(2, 'Mike')
// console.log(mike)

// console.log(brad.private_id)     // => ERROR
// console.log(brad.protected_id)   // => ERROR

// console.log(brad.register())


// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const employee1 = new Employee(1, 'Shawn', 'Developer')
// console.log(employee1.register())


// Generics < >
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'john', 'jane'])

// numArray.push('hello') // => ERROR