//#1

function checkDriverAge(){
  var age = prompt("What is your age?");
if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}

//#2 function expression!
var checkDriverAge2 = function(){
  var age = prompt("What is your age?");
if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}


//#3 BONUSLY!
//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age,

function checkDriverAge(age){
if (Number(age) < 18) {
	return("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	return("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	return("Congratulations on your first year of driving. Enjoy the ride!");
}
}