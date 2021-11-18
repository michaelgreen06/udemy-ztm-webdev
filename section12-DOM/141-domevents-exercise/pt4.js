var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var gli=document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function adddel(){
	for (var i = 0; i < gli.length; i++) {
		gli[i].appendChild(document.createElement("button").createTextNode("value"))
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
