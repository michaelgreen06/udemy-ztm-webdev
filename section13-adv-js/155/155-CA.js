//advanced arrays
const array = [0,1,2,3,4,5];

//forEach Example

const double =[];
const newArray=array.forEach((num)=>{
  double.push(num*2);
})

console.log(double);

//map, filter, reduce - 3 most common functions in day to day programing
//map - always have to return something. Creates a new array
//map is preferred over forEach

//original
const mapArray=array.map((num)=>{
  return num*2;
})

//Simplified w/ es6 notation
const mapArray=array.map(num=> num*2)

console.log(mapArray);

//filter

const filterArray=array.filter(num=> num>5);

//reduce - really powerful! Can do a LOT w/ it!

const reduceArray= array.reduce((accumulator, num)=>{
  return accumulator+num;
},0);

console.log("reduce",reduceArray);
