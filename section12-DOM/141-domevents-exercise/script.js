var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lii = document.querySelector("li");
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
	// document.querySelector("lii").classList.toggle("done");
	// ul.classList.toggle("done");
	lii.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// my 1st guess at selecting li's
// ul.addEventListener("click", addDoneClass);
lii.addEventListener("click", addDoneClass);
