// testing some code on objects
// var person1 = {
//    name: 'John',
//    rithm: '60bpm'
// };
// console.log('name' in person1);
// delete person1.name;
// console.log('name' in person1);
// console.log(person1.name);

// ennumeration
// for (var index in person1) {
//    console.log('Name: ' + index);
//    console.log('Value: ' + person1[index]);
// }

// var person1Properties = Object.keys(person1);
// console.log(person1Properties);
// console.log(person1Properties.length);


// var object = {};
// console.log(object.toString());
// object.toString = function  () {
//     return '[object Custom]';
// };
// console.log(object.toString());


// function Person(name) {
//    this.name = name;
// }
// Person.prototype.sayName = function() {
//    console.log(this.name);
// };
// Person.prototype.favorites = [];
// var person1 = new Person('Demostene');
// var person2 = new Person('Galileo');
// person1.favorites.push('philosophy');
// person2.favorites.push('astronomy');
// console.log(person1.favorites);
// console.log(person2.favorites);

// instance
function Person(name){
   this.name = name;
}

Person.prototype = {
   // constructor property assigned on the prototype
   // constructors are normal functions that are called within the new operator
   constructor: Person,
   sayName: function () {
       console.log(this.name);
   },
   toString: function () {
       return '[Person ' + this.name + ']'; 
   }
};

var person1 = new Person('Celibidache');
// identify object created from constructor using instanceof
console.log(person1 instanceof Person); 
console.log(person1.constructor === Person);
console.log(person1.constructor === Object);
