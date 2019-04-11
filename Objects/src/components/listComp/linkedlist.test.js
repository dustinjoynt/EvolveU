import LinkedList from './linkedlist'

const linkedList = new LinkedList()

test('works', () => {
	// console.log(linkedList)
	// linkedList.insertAtBeginning('baseball', 25)
	// console.log(linkedList)
	// linkedList.insertAtBeginning('hockey', 30)
	// console.log(linkedList)
	// linkedList.insertAtBeginning('soccer', 30)
	// console.log(linkedList)
	// linkedList.insertAtBeginning('tennis', 30)
	// console.log(linkedList)

	// // console.log(linkedList.getAt(0))

	// console.log('first', linkedList.getFirst())
	// // console.log(linkedList.currentNode)

	// // console.log('last', linkedList.getLast())

	// // // console.log(linkedList.currentNode)

	// console.log('next', linkedList.getNext())

	// // // console.log(linkedList.head.forwardNode.forwardNode)

	// // console.log('current', linkedList.currentNode)

	// console.log('previous', linkedList.getPrevious())

	linkedList.insertNode('tim', 23)
	console.log(linkedList)
	linkedList.insertNode('jo', 27)
	console.log(linkedList)
	linkedList.insertNode('fred', 27)
	console.log(linkedList)
	linkedList.insertNode('louis', 30)
	console.log(linkedList)

	// console.log('current', linkedList.currentNode)
	// linkedList.getFirst()
	// linkedList.getNext()
	// console.log(linkedList.currentNode)
	// linkedList.getFirst()
	// linkedList.insertNode('window', 55)
	linkedList.getLast()
	console.log('LAST', linkedList)

	// console.log('SHOW', linkedList.currentNode.show())

	// linkedList.deleteNode()

	// console.log(linkedList)

	// console.log(currentNode)






})