//for loops - most common loop
var todos=[
  "clean room",
  "brush teeth",
  "write pNp newsletter draft",
  "package cones & send to FBA",
  "study javascript"
];

var todosLength=todos.length;
for(var i=0; i<todosLength; i++){
  console.log(todos[i],i);
}
//
// //while loops
// var counterOne=10;
// while (counterOne>0){
//   console.log(counterOne);
//   counterOne--
// }

//do while loop
// var counterTwo=10;
// do{
//   console.log(counterTwo);
//   counterTwo--;
// }while (counterTwo>0);

//forEach loop - only for arrays?
todos.forEach(function(todo,i) {
  console.log(todo,i);
})

//foreach 2nd iteration
function logToDos(todo,i){
  console.log(todo,i);
}
todos.forEach(logToDos);
