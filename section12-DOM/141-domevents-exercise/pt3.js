var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var dbtn = document.createElement("button");
// var dbtn = function () {
// 	document.createElement("button");
// }

function inputLength() {
	return input.value.length;
}

// function delbtn(){
//   dbtn.innerHTML="Delete!";
// }

function createListElement() {
	var li = document.createElement("li");
  var dbtn = document.createElement("button");
	// var dt = document.createTextNode("delete"); - this works w/ dbtn.appendChild(dt)
	//got above solution from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild3
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
  // li.appendChild(dbtn).innerHTML="Delete";
	// dbtn.appendChild(document.createTextNode("delete"));
	// li.appendChild(dbtn).createTextNode("Delete");
	dbtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(dbtn);
  li.onclick=function (){
    //used li but it looks like I could also use this. not sure which is better
    li.classList.toggle("done");
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
