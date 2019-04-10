import Node from './node.js'

test('works', () =>{
	//test constructor
	let node = new Node('baseball', 25)
	expect(node.subject).toBe('baseball')
	expect(node.forwardNode).toBe(null)
})