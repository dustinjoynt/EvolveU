// let div = document.querySelector('div');

// div.addEventListener("click", function(){ console.log("CLICK")});

let show = document.getElementById('show');

// Add an event on show button to display all the children of the <ol> tag
show.addEventListener("click", function(){ 
	console.log(document.querySelectorAll('ol')[0].children);
	});

//add an event on the add button that will add a <li> tag to the end and the start of the list
let add = document.getElementById('add');
let input = document.getElementById('input');
let ol = document.querySelector('ol');


//add to event to the end of the list

add.addEventListener("click", function(){
	if (input.value.length > 0){
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ol.appendChild(li);
		input.value = '';
	}	
});

//add an event to the start of the list

// add.addEventListener("click", function(){
// 	if (input.value.length > 0){
// 		let li = document.createElement("li");
// 		let txtnode = document.createTextNode(input.value);
// 		li.appendChild(txtnode);
// 		ol.insertBefore(li, ol.childNodes[0]);
// 		input.value = '';
// 	}
// });

//delete an item from the ol

let remove = document.getElementById('remove');

remove.addEventListener("click", removef);

function removef(){
	ol.removeChild(ol.lastElementChild);
	// console.log(ol.lastChild);
};

//Working with Cards

let addCard = document.getElementById("addcard");
addCard.addEventListener('click', addNewCard);

let count = 1;

function addNewCard(){

	let newDiv = makeNewCard();
	let currentDiv = document.getElementById("leftside");
	currentDiv.appendChild(newDiv);

		newDiv.addEventListener('click', cardButtons)		

		function cardButtons(event){

			let response = event.target.value;
				if (response === 'Delete'){
					// currentDiv.removeChild(newDiv);
					currentDiv.removeChild(event.target.parentElement);
				}
				if (response === 'Add Before'){
					let newDiv2 = makeNewCard();
					currentDiv.insertBefore(newDiv2, event.target.parentElement);
				}
				if (response === 'Add After'){
					let newDiv3 = makeNewCard();
					currentDiv.insertBefore(newDiv3, event.target.parentElement.nextSibling);
				}
		}
		
function makeNewCard(){

	let newDiv2 = document.createElement('div');

	newDiv2.className = ("cardChild");

	let newCard2 = document.createElement('h1');
	
	let header2 = document.createTextNode("Card" +" "+count++);
	newCard2.appendChild(header2);

	//create new add before button
	let newAddBefore2 = document.createElement('input');
	newAddBefore2.type = ("button");
	newAddBefore2.value = ("Add Before");

	//create new add after button
	let newAddAfter2 = document.createElement('input');
	newAddAfter2.type = ("button");
	newAddAfter2.value = ("Add After");

	//create new delete button
	let deleteCard2 = document.createElement('input');
	deleteCard2.type = ("button");
	deleteCard2.value = ("Delete");

	newDiv2.appendChild(newCard2);
	newDiv2.appendChild(newAddBefore2);
	newDiv2.appendChild(newAddAfter2);
	newDiv2.appendChild(deleteCard2);

	newDiv2.addEventListener('click', cardButtons)		

	return newDiv2;
}


};








