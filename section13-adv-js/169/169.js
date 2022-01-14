const basket = ['apples','oranges','grapes'];
const detailedBasket={
  apples:2,
  oranges:10,
  grapes:1
}
//arrays are also objects!
const basket={
  0:'apples',
  1:'oranges',
  2:'grapes '

}
//1 for loop we already know
for (var i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}
//2
basket.forEach((item) => {
  console.log(item);
});

//for of loop
//iteratable items - arrays, strings
for (item of basket){
  console.log(item);
}

//for in loop - works w/ objects
//w/ objects we don't iterate we enumerate!
for (item in detailedBasket){
  console.log(item);
}
