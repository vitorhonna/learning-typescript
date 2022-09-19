var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic Types
var user_id = 5;
var company = 'My Company';
var isPublished = true;
var x = 'Hello';
// Arrays
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, 'Hello'];
// Tuple
var person = [1, 'Bob', true];
// Tuple Array
var employee;
employee = [
    [1, 'Bob'],
    [2, 'John'],
    [3, 'Jane']
];
// Union
var pid = 22;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Up) // => 0
// console.log(Direction1.Left) // => 2
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
// console.log(Direction1.Up) // => 1
// console.log(Direction1.Left) // => 3
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
// Objects
var user = {
    id: 1,
    name: 'John'
};
var animal = {
    id: 1,
    name: 'Cat'
};
// Type Assertion
var cid = 1;
var customerId_number = cid; // customerId_number will be a number
var customerId_string = cid; // customerId_string will be a string
// Functions
function addNum(x, y) {
    return x + y;
}
var aaa = addNum(1, 2);
// let bbb: string = addNum(1,2) // => ERROR (retorno é tipo number)
// let ccc: number = addNum(1,'2') // => ERROR (parâmetro deve ser tipo number)
// Void
function log(message) {
    console.log(message);
}
var animal1 = {
    id: 1,
    name: 'Cat',
    age: 2,
    uuid: 'abc-123'
};
var p1 = 1;
var add = function (x, y) { return x + y; };
// const add2: MathFunc = (x: number, y: number): number => (x + y).toString() // => ERRO
var sub = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.private_id = 1; // only accessible within the class
        this.protected_id = 2; // only accessible within the class or classes that extend it (subclasses)
        // console.log('A new Person was instantiated!')
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered!");
    };
    return Person;
}());
var brad = new Person(1, 'Brad');
// console.log(brad)
var mike = new Person(2, 'Mike');
// console.log(mike)
// console.log(brad.private_id)     // => ERROR
// console.log(brad.protected_id)   // => ERROR
// console.log(brad.register())
// Subclasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var employee1 = new Employee(1, 'Shawn', 'Developer');
// console.log(employee1.register())
// Generics < >
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['brad', 'john', 'jane']);
// numArray.push('hello') // => ERROR
