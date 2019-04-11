import Node from './node'

class LinkedList{
	constructor(){
		this.head = null
		this.currentNode = null
	}

	// getAt (index) {
	// 	let counter = 0
	// 	let node = this.head
	// 	while (node) {
	// 		if( counter === index) {
	// 			return node
	// 		}
	// 		counter ++
	// 		node = node.forwardNode
	// 	}
	// 	return null
	// }

	getFirst () {
		let node = this.head
		return this.currentNode = node
	}

	getLast () {
		let node = this.head
		while (node) {
			if(node.forwardNode === null){
				return this.currentNode = node
			}
			node = node.forwardNode
		}
	}

	getNext () {
		let node = this.currentNode
		return this.currentNode = node.forwardNode
	}

	getPrevious () {
		let node = this.head
		if(node === this.currentNode){
			return node
		}
		while (node) {
			if (this.currentNode === node.forwardNode){
				node = this.currentNode
				return node
			}
			node = node.forwardNode
		}
	}

	// 	insertAtBeginning (subject, amount) {
	// 	let newNode = new Node(subject, amount)
	// 	newNode.forwardNode = this.head
	// 	this.head = newNode
	// 	this.currentNode = newNode
	// 	return this.head
	// }

	insertNode (subject, amount) {
		if(this.head === null){
			let newNode = new Node(subject, amount)
			newNode.forwardNode = null
			this.head = newNode
			this.currentNode = newNode
			return this.head
		}
		else{
			let newNode = new Node(subject, amount)
			let previousNode = this.getPrevious()
			console.log('INSIDE', previousNode)
			newNode.forwardNode = previousNode.forwardNode
			previousNode.forwardNode = newNode
			this.currentNode = newNode
			return newNode
		}
	}

	deleteNode () {
		let previousNode = this.getPrevious()
		// let currentNode = this.currentNode
		// console.log('INSIDE', this.currentNode.forwardNode)
		console.log('INSIDE PREV', previousNode)
		previousNode.forwardNode = this.currentNode.forwardNode
		this.currentNode = previousNode
		return this.currentNode
	}

}


export default LinkedList	