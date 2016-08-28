// learning oop following code from
// http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/

// function PrintStuff(myDocuments) {
//    this.documents = myDocuments;
// }

// PrintStuff.prototype.print = function() {
//    console.log(this.documents);
// };
// var newObj = new PrintStuff('I am a new Object');
// newObj.print();

// console.log(newObj.constructor);


function Plant() {
   this.country = 'Mexic';
   this.isOrganic = true;
}

// add a method to the Plant prototype
Plant.prototype.showNameAndColor = function() {
   console.log('I am a ' + this.name + ' and my color is ' + this.color);
};
// add organic method
Plant.prototype.amIOrganic = function() {
   if (this.isOrganic) {
      console.log('Yes! OOrganic oriented javacript!');
   }
};

function Fruit(fruitName, fruitColor) {
   this.name = fruitName;
   this.color = fruitColor;
}
// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.​
Fruit.prototype = new Plant();

var aBanana = new Fruit('Banana', 'Yellow');
console.log(aBanana.name);
console.log(aBanana.showNameAndColor());




