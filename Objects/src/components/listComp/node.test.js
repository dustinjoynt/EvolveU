import Node from './node.js'

test('works', () =>{
	
	const node = new Node('baseball', 25)
	
	//test constructor
	expect(node.subject).toBe('baseball')
	expect(node.forwardNode).toBe(null)
	expect(node.show()).toBe('baseball 25')
})