import City from './city.js'

test('works', () =>{
	const obj = new City('Calgary', 51, -114, 1267344)
	//test constructor
	expect(obj.name).toBe('Calgary')
	expect(obj.latitude).toBe(51)
	expect(obj.longitude).toBe(-114)
	expect(obj.population).toBe(1267344)
	
})
