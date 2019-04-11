import City from './city.js'

test('works', () =>{
	const obj = new City('Calgary', 51, -114, 10000)
	//test constructor
	expect(obj.name).toBe('Calgary')
	expect(obj.latitude).toBe(51)
	expect(obj.longitude).toBe(-114)
	expect(obj.population).toBe(10000)
	//test show 
	expect(obj.show()).toBe('Calgary 51° -114° POP: 10000')
	//test moved in
	expect(obj.movedIn(100)).toBe(10100)
	//test moved out
	expect(obj.movedOut(50)).toBe(10050)
	//test how big
	expect(obj.howBig()).toBe('Town')
	obj.movedIn(100000)
	expect(obj.howBig()).toBe('City')
})
