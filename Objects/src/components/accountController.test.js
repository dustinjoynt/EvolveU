import Accounts from './accountController.js'
import Account from './account.js'

test('works', () => {
	const array = new Accounts()
	
	//create objects to test
	const Forest = new Account('Forest', 500)
	const Dustin = new Account('Dustin',200)
	const James = new Account('James',100)
	
	//test instantiation of array
	expect(array.acctArray.length).toBe(0) //toEqual could be used as '==' vs toBe '==='
	
	//test addAccount

		// expect(array.addAccount('hello')).toBe(array.acctArray.length[1])
		// console.log(array.acctArray[0])
	
	array.addAccount(Forest)
	expect(array.acctArray[0]).toBe(Forest)
	
	//add additional account
	array.addAccount(Dustin)
	console.log('Add Account', array)

	//add additional account
	array.addAccount(James)
	console.log('Add Account2', array)
	
	// test removeAccount
	array.removeAccount(1)
	console.log('remove', array)
	expect(array.acctArray[0]).toBe(Forest)

	//test sumAccount
	array.sumAccount()
	console.log('Account Sum', array.accountSum)
	expect(array.accountSum).toBe(600)

	//test accountMax
	array.accountMax()
	console.log('max', array.maxAccount)
	expect(array.maxAccount).toBe(500)
	
	//test accountMin
	array.accountMin()
	console.log('min', array.minAccount)
	expect(array.minAccount).toBe(100)


})