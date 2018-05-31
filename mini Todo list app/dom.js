

// // //Select the button
// // var button = document.getElementsByTagName("button")[0];

// // button.addEventListener("click", function(){
// //     console.log("Click!!");

// // })

// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.getElementById("task");

// function inputLength(){
//     return input.value.length;
// }

// //Time to refactor
// // button.addEventListener("click",function(){

// //     // console.log("Click is working");
// //     if (input.value.length>0){
// //         var li =document.createElement("li")
// //         li.appendChild(document.createTextNode(input.value));
// //         ul.appendChild(li)
// //         input.value="";
// //     }
    

// // })

// // input.addEventListener("keypress",function(event){

// //     // console.log("Click is working");
// //     if (input.value.length>0 && event.keyCode===13){
// //         var li =document.createElement("li")
// //         li.appendChild(document.createTextNode(input.value));
// //         ul.appendChild(li)
// //         input.value="";
// //     }
    

// // })
// // Code after refactoring
// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }
// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);
// Updating the js file with toggle and remove function


// //Select the button
// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("Click!!");

// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("task");
var li= document.querySelector("li");

function inputLength(){
    return input.value.length;
}

//Time to refactor
// button.addEventListener("click",function(){

//     // console.log("Click is working");
//     if (input.value.length>0){
//         var li =document.createElement("li")
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li)
//         input.value="";
//     }
    

// })

// input.addEventListener("keypress",function(event){

//     // console.log("Click is working");
//     if (input.value.length>0 && event.keyCode===13){
//         var li =document.createElement("li")
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li)
//         input.value="";
//     }
    

// })
// Code after refactoring
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
//toggle event
function toggleEvent(e){
    e.classList.toggle("done")
}
//remove button to remove item when clicked on corresponding delete button
function remove(li, e){

    const i = li.indexOf(e);
    li.splice(i, 1);
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);