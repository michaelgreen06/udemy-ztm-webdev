var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lii = document.querySelectorAll("li");
var btn = document.createElement("button");

function btnTxt() {
		btn.innerHTML="Delete";
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");

	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	btn.innerHTML="Delete";
	li.appendChild(btn);
	btn.onclick=function(){
		li.remove();}
	li.onclick=function(){
		this.classList.toggle("done");
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



function addDoneClass(){
	for (var index = 0; index <lii.length; index++){
		 lii[index].addEventListener("click", function(){
				this.classList.toggle("done");
		 });}}

function addButtons(){
	for (var index = 0; index <lii.length; index++){
		 lii[index].appendChild(btn);
		 };}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
addDoneClass();
btnTxt();
addButtons();




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
