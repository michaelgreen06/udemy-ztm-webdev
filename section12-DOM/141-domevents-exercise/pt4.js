var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var gli=document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function adddel(){
	for (var i = 0; i< gli.length; i++) {
		var ddbtn=document.createElement("button");
		gli[i].appendChild(ddbtn);
		ddbtn.appendChild(document.createTextNode("Delete"));
		// original code. top line works. bottom doesnt
		//ascii says it's because .createTextNode() method is part of the document
		// object, not the element you are creating. You will need to refer to the
		// element you are creating and use .appendChild(document.createTextNode(someText)) on it.
		// gli[i].appendChild(document.createElement("button"));
		// gli[i].appendChild(document.createTextNode("Delete"));
	}
}

adddel();

function strike (){
	for (let i=0; i<gli.length; i++){
			gli[i].addEventListener("click", addDoneClass);
		}
	}
function addDoneClass(){
	this.classList.toggle("done");
}
strike();

function createListElement() {
	var li = document.createElement("li");
	var dbtn=document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.onclick=function(){
		li.classList.toggle("done");
	}
	li.appendChild(dbtn);
	dbtn.appendChild(document.createTextNode("Delete"));
	dbtn.onclick=function(){
		li.remove();
	}
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
