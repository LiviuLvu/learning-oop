// inheritance oop
// var beer = {
//    company: 'Grolsch'
// };
// var prototype = Object.getPrototypeOf(beer);
// console.log(prototype === Object.prototype);

// // adding properties to the native js objects is not recommended
// Object.prototype.add = function(value) {
//    return this + value;
// };

// var empty = {};
// for (var property in empty) {
//    if (empty.hasOwnProperty(property)) {
//       console.log(property);
//    }
// }

var person1 = {
   name: 'Carl Sagan',
   sayName: function () {
       console.log(this.name);
   }
};
var person2 = Object.create(person1, {
   name:{
      configurable: true,
      ennumerable: true,
      value: 'Nikola Tesla',
      writable: true
   }
});
person1.sayName();
person2.sayName();
console.log(person1.hasOwnProperty('sayName'));
console.log(person1.isPrototypeOf(person2));
console.log(person2.hasOwnProperty('sayName'));
