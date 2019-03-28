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

	let newDiv = document.createElement('div');
	newDiv.className = ("cardChild");
	// newDiv.id = ('newNew');
	
	let currentDiv = document.getElementById("leftside");

	let newCard = document.createElement('h1');
	
	let header = document.createTextNode("Card" +" "+count++);
	newCard.appendChild(header);

	//create new add before button
	let newAddBefore = document.createElement('input');
	newAddBefore.id = ("newAddBefore");
	newAddBefore.type = ("button");
	newAddBefore.value = ("Add Before");

	//create new add after button
	let newAddAfter = document.createElement('input');
	newAddAfter.id = ("newAddAfter");
	newAddAfter.type = ("button");
	newAddAfter.value = ("Add After");

	//create new delete button
	let deleteCard = document.createElement('input');
	deleteCard.id = ('deleteCard');
	deleteCard.type = ("button");
	deleteCard.value = ("Delete");


	currentDiv.appendChild(newDiv);
	newDiv.appendChild(newCard);
	newDiv.appendChild(newAddBefore);
	newDiv.appendChild(newAddAfter);
	newDiv.appendChild(deleteCard);

		// let deleteCard1 = document.getElementById("deleteCard1");
		// deleteCard1.addEventListener('click', removeCard);

		// let deleteCard1 = document.getElementById("newNew");
		
		newDiv.addEventListener('click', cardButtons)		

		function cardButtons(event){
			//console.log(event.target.id);
			// leftside.removeChild(newNew);
			let response = event.target.id;
				if (response === 'deleteCard'){
					// console.log("delete");
					console.log(`leftside: ${leftside.textContent}`)
					console.log(`newDiv: ${newDiv.textContent}`)
					//currentDiv.removeChild(newDiv);
					currentDiv.removeChild(newDiv);
				}
				if (response === 'newAddBefore'){
					console.log("addBefore");
					// parent is 'currentDiv'
					// 'newDiv' refernces the card whose button was clicked, i.e
					//.       the current card
					currentDiv.insertBefore(newDiv, event.target.parentElement);
					console.log(event.target.parentElement.textContent);



					//let x = addNewCard();
					 //currentDiv.childElement.insertBefore(newDiv, x);
					 //leftside.insertBefore(x, newDiv);
				}
				if (response === 'newAddAfter'){
					console.log("addAFTER");
					//let x = addNewCard();
					//newDiv.parentElement.insertAfter(newDiv, x);
				}
		}
		



};








