var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lii = document.querySelectorAll("li");
//I get an error whenever I define a variable as something that returns
//more than one result. This happens w/ the below code:
// var lii = document.querySelectorAll("li");
// var lii = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDoneClass(){
	for (var index = 0; index <lii.length; index++){
		 lii[index].addEventListener("click", function(){
				this.classList.toggle("done");
		 });}}

//copied & pasted above function hoping to do a callback because it seems cleaner
 // function addDoneClass(){
 // 	for (var index = 0; index <lii.length; index++){
 // 		 lii[index].classList.toggle("done");
 // 		 };   }

	// document.querySelector("lii").classList.toggle("done");
	// ul.classList.toggle("done");
	// lii.classList.toggle("done");


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
addDoneClass();

// my 1st guess at selecting li's
// ul.addEventListener("click", addDoneClass);
// lii.addEventListener("click", addDoneClass);


//acquired from: https://www.tutorialspoint.com/how-to-remove-li-elements-on-button-click-in-javascript
// var allSubjectName = document.querySelectorAll(".subjectName");
//    for (var index = 0; index <allSubjectName.length; index++){
//       allSubjectName[index].addEventListener("click", function(){
//          this.classList.toggle("active");
//       });
//       allSubjectName[index].querySelector("button").addEventListener("click",
//       function(){
//          this.closest(".subjectName").remove();
//       });
//    }
