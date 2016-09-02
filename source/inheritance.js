// inheritance oop
var beer = {
   company: 'Grolsch'
};
var prototype = Object.getPrototypeOf(beer);
console.log(prototype === Object.prototype);
