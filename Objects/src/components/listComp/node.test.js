import Node from './node.js'

test('works', () =>{
	//test constructor
	const node = new Node('baseball', 25)
	console.log(node)
	expect(node.subject).toBe('baseball')
	expect(node.forwardNode).toBe(null)
})