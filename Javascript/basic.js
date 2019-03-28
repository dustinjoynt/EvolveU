//Print to console log

console.log("Hello world from basic.js")

//Return value to console.log

let button = document.getElementById("button");

button.addEventListener("click", onButtonClicked); //paramater one type of event, second paramater calls function

function onButtonClicked() {
	 let a = Number(document.getElementById("input").value); //retrieve value and define as number to change value from string
	 console.log(a + 1);	
}

//My Calculator

let a, b; //define variable

//run function to change variable values to input
function defineVar() {
	a = Number(document.getElementById("input2").value);
	b = Number(document.getElementById("input3").value);
}

//define variables from HTML elements
let add = document.getElementById("add").addEventListener("click", addition);
let sub = document.getElementById("subtract").addEventListener("click", subtract);
let divide = document.getElementById("divide").addEventListener("click", dividef);
let multiply = document.getElementById("multiply").addEventListener("click", multiplyf);
let result = document.getElementById("input4");

//run functions based on operator buttons
function addition() {
	defineVar();
	// let a = Number(document.getElementById("input2").value);
	// let b = Number(document.getElementById("input3").value);
	 result.value = a + b;
}

function subtract() {
	defineVar();
	 result.value = a - b;
}

function dividef() {
	defineVar();
	 result.value = a / b;
}

function multiplyf() {
	defineVar();
	 result.value = a * b;
}

//Canadian Taxes

//let income = Number(document.getElementById("income").value);

let tax = document.getElementById("calculate").addEventListener("click", taxes);
let effectivetax = document.getElementById("effectivetax");

function taxes(){
	
	let income = Number(document.getElementById("income").value);
		
		if (income <= 47630) {
			incometax = income * .15;
			etax = incometax / income * 100
			effectivetax.value = incometax; // .textContent can be used to put results in <p><p/> container in HTML instead of .value
			effectiverate.value = etax;

	}else if (income <= 95259) {
			incometax = (income - 47630)*.205+7145;
			etax = incometax / income * 100
			effectivetax.value = incometax;
			effectiverate.value = etax;

	}else if (income <= 147667){
			incometax = (income - 95259)*.26+16908;
			etax = incometax / income * 100
			effectivetax.value = incometax;
			effectiverate.value = etax;

	}else if (income <= 210371){
			incometax = (income - 147667)*.29+30535;
			etax = incometax / income * 100
			effectivetax.value = incometax;
			effectiverate.value = etax;

	}else { incometax = (income - 210371)*.33+48719;
			etax = incometax / income * 100
			effectivetax.value = incometax;
			effectiverate.value = etax;
		}
}


//Working With Arrays

const array = [];

let addArray = document.getElementById("add2").addEventListener("click", changeArray);
let showArray = document.getElementById("show").addEventListener("click", showArrayF);
let totalArray = document.getElementById("total").addEventListener("click", totalArrayF);
let clearArray = document.getElementById("clear").addEventListener("click", clearArrayF);

function changeArray(){

	let value = Number(document.getElementById("array").value);
	
	//isNan function determines wehter the value is NaN or not
	if (isNaN(value)) {
		messageBox.textContent = "Input is not a valid number.";
	
	}else {
		array.push(value);
		messageBox.textContent = "Number has been added to the array.";
	}
}

function showArrayF(){
	messageBox.textContent = array.toString();
}

let sumA = 0

function totalArrayF(){
	
	for(let i=0; i < array.length; i++){
		sumA = sumA + array[i];
	}
	messageBox.textContent = sumA;
}

function clearArrayF(){
	array.length = 0; //set array length to zero to clear array
	messageBox.textContent = "The array has been cleared."
}


//Working with Dictionaries

const provinces = { ab: "Alberta", 
					bc: "British Columbia", 
					sk: "Saskatchewan", 
					mb: "Manitoba",
					on: "Ontario",
					qb: "Quebec"}
let lookup = document.getElementById("lookup").addEventListener("click", lookupValue);


function lookupValue(){
	
	let provinceShort = document.getElementById("dictionary").value;
	messageBox2.textContent = provinces[provinceShort];
}

