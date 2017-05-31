/*

Working with Objects

Your car from Exercise 1 should have atleast 4 properties, at least one of
which is a method. Use it to answer the prompts below.

*/




/*

Redeclare your car here. It can either by by typing it out again or by
copying and pasting it here. Make sure you're assigning your car object to a
variable and that it meets the conditions above of having at least 4
properties, one of which is a method

*/


const car = {
  'name' : 'my shitty car',
  make: 'Tesla',
  model: 'M - baby',
  manuacturedColor: 'perwinkle',
  odometer: '199,920',
  dimensions: {
    length: '10',
    width: '5',
  },
  originOfPurchase: "Jonathyn with a y",
}



/*

Get one of the properties from your object using dot notation

*/

console.log(car.dimensions.width);


/*

Get one of the properties from your object using bracket notation

*/

console.log( car['odometer']);


/*

Set one of the values of one of your properties using either dot notation or
bracket notation

*/
car['odometer'] = "99 problems";
car.dimensions.length = 100;
console.log(car.odometer);

/*

Call your car's method

*/

console.log(car.dimensions.length);

car['dimensions']['length'] = 99 //you could also do this 
