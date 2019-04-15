class Queue{
	constructor(){
		this.queue = []
	}

	addQueue (item){
		this.queue.push(item)
	}

	fifo (){
		this.queue.shift()
	}

	lifo(){
		this.queue.pop()
	}
	
}

export default Queue