import Queue from './queue.js'

test('works', () =>{

	const queue = new Queue()

	//test instantiation of Queue
	expect(queue.queue.length).toBe(0)

	//test add items to array
	queue.addQueue('Tiger')
	queue.addQueue('Lion')
	queue.addQueue('Cheeta')
	expect(queue.queue.length).toBe(3)

	//test fifo
	queue.fifo()
	expect(queue.queue[0]).toBe('Lion')
	queue.fifo()
	expect(queue.queue[0]).toBe('Cheeta')
	queue.fifo()
	expect(queue.queue[0]).toBe()

	//test add items to array
	queue.addQueue('Tiger')
	queue.addQueue('Lion')
	queue.addQueue('Cheeta')
	expect(queue.queue.length).toBe(3)

	//test lifo
	queue.lifo()
	expect(queue.queue[0]).toBe('Tiger')
	queue.lifo()
	expect(queue.queue[0]).toBe('Tiger')
	queue.lifo()
	expect(queue.queue[0]).toBe()




})