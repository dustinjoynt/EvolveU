import Community from './community.js'
import City from './city.js'

test('works', () =>{
	//test which Sphere
	const comm = new Community()

	const calgary = new City('Calgary', 51, -114, 10000)
	const melbourne = new City('Melbourne', -37, 145, 200000)

	//test instantiaion of Community
	expect(comm.arrCommunity.length).toBe(0)

	//test add city
	comm.addCity(calgary)
	comm.addCity(melbourne)
	expect(comm.arrCommunity.length).toBe(2)

	//test whichSphere
	expect(comm.whichSphere(0)).toBe('North')
	expect(comm.whichSphere(1)).toBe('South')

	//test getMostNorthern
	comm.getMostNorthern()
	expect(comm.mostNorth.name).toBe('Calgary')

	//test getMostSouthern
	comm.getMostSouthern()
	expect(comm.mostSouth.name).toBe('Melbourne')

	//test getPopulation
	comm.getPopulation()
	expect(comm.totalPopulation).toBe(210000)
})