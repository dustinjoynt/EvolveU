import Account from './account.js'

test('works', () => {
	const obj = new Account('Dustin', 25)
	//test constructor
	expect(obj.acctName).toBe('Dustin')
	expect(obj.intBalance).toBe(25)
	//test deposit
	expect(obj.deposit(10)).toBe(35)
	console.log(obj.intBalance)
	//test withdraw
	expect(obj.withdraw(30)).toBe(5)
	console.log(obj.intBalance)
	//check balance
	expect(obj.intBalance).toBe(5)

})

