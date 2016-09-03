// object patterns

// module pattern or IIFE
// var person = (function() {
//    var age = 30;
//    function getAge() {
//       return age;
//    }
//    function growOlder() {
//       age++;
//    }
//    return {
//       name: 'Nicholas',
//       getAge: getAge,
//       growOlder: growOlder
//    };
// }());

// mixin
function mixin(receiver, supplier){
   for(var property in supplier){
      if (supplier.hasOwnProperty(property)) {
         receiver[property] = supplier[property];
      }
   }
}
function Person(name) {
    this.name = name; 
}
mixin(Person.prototype, EventTarget.prototype);
mixin(Person.prototype, {
   constructor: Person,
   sayName: function () {
       console.log(this.name);
       this.fire({type:'namesaid',name: name});
   }
});
var person = new Person('Benjamin');
console.log(person instanceof Person);
console.log(person instanceof EventTarget);

