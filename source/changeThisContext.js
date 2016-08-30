// following code is based on examples from book Nicholas.C.Zakas - The principles of OOP
// below are two examples of bind 
function sayNameForAll (label) {
   console.log(label + this.name);
}

var person1 = {
   name:'Liviu'
};
var person2 = {
   name: 'Iancu'
};

var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1('hello person1!');

var sayNameForPerson2 = sayNameForAll.bind(person2, 'hello person2!');
sayNameForPerson2();

// attaching a hard bound method to an object doesn't change 'this'
person2.sayName = sayNameForPerson1;
person2.sayName('person2');
