import LinkedList from './linkedlist'

const linkedList = new LinkedList()

test('works', () => {

	//test insertion of first node, position of currentNode and node pointer
	linkedList.insertNode('baseball', 50)
	expect(linkedList.head.subject).toBe('baseball')
	expect(linkedList.currentNode.subject).toBe('baseball')
	expect(linkedList.head.forwardNode).toBe(null)
	console.log(linkedList)

	//test insertion of second node and position of currentNode 
	linkedList.insertNode('golf', 25)
	expect(linkedList.head.forwardNode.subject).toBe('golf')
	expect(linkedList.currentNode.subject).toBe('golf')
	console.log(linkedList)

	//test insertion of third node and position of currentNode
	linkedList.insertNode('tennis', 65)
	console.log('3', linkedList)
	expect(linkedList.head.forwardNode.forwardNode.subject).toBe('tennis')
	expect(linkedList.currentNode.subject).toBe('tennis')

	//test getFirst method
	linkedList.getFirst()
	expect(linkedList.currentNode.subject).toBe('baseball')

	//test getNext method
	linkedList.getNext()
	expect(linkedList.currentNode.subject).toBe('golf')

	//test getLast method
	linkedList.getLast()
	expect(linkedList.currentNode.subject).toBe('tennis')

	//test getPrevious method
	linkedList.getPrevious()
	expect(linkedList.currentNode.subject).toBe('golf')

	//test deleteNode
	linkedList.deleteNode()
	expect(linkedList.currentNode.subject).toBe('baseball')
	console.log('afterDelete', linkedList)

	//test get previous on head
	linkedList.getFirst()
	linkedList.getPrevious()
	expect(linkedList.currentNode.subject).toBe('baseball')

	//test get next on last node
	linkedList.getLast()
	linkedList.getNext()
	expect(linkedList.currentNode.subject).toBe('tennis')

})