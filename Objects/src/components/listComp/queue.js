import LinkedList from './linkedlist.js'

class Queue{
	constructor(){
		this.queue = []
	}

	queueNode () {
		queue.push(linkedList.currentNode)
	}

	removeFifo () {
		this.currentNode = fifo[0]
		linkedList.deleteNode()

	}

	removeLifo () {
		this.currentNode = fifo[fifo.length - 1]
		linkedList.deleteNode()
	}

}

export default Queue