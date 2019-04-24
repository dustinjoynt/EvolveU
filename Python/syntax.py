####################
### BASIC SYNTAX ###
####################

def syntaxF():
	# define attributes / variables

	# number
	a = 2

	# string
	b = 'hello'

	# boolean
	c = False

	# array
	d = [1,2,3,4,5]

	# dictionary / objects
	e = {'a':1, 'b':2, 'c':3}

	# undefined
	# f = g

	print('variables:', f'{a}, {b}, {c}, {d}, {e}')

	# sample if / else
		# functions
		# parameters
		# returns

	def add(n1, n2):
		if n1 + n2 == 10:
			return True
		else:
			return n1 + n2

	print('if/else:', add(2,7))
	print('if/else:', add(3,7))


	# arrays
		# add to the front
		# add to the end
		# update values

	li = [1,2,3,4]

	li.insert(0,5)
	print('add to front', li)

	li.append(6)
	print('add to end', li)

	li[1] = 7
	print('update value', li)

	# loops 
	# for
	# for/in
	# while
	# do while
	# forEach (with array and function)

	print('For loop:')
	for item in li:
		print(item)

	pairs = [(1,2),(3,4),(5,6)]

	print('For loop - tuples')
	for item1, item2 in pairs:
		print(f'First: {item1}, Second: {item2}')

	print('For loop - function')
	for item1, item2 in pairs:
		print(add(item1, item2))

	i = 5
	print('While loop:')
	while i < 10:
		print(i)
		i = i+1	

	# Objects / Dictionaries
	# declare object
	# lookup key to retrieve value

	print('Dictionary lookup:', e['b'])


##################
### MAKE EMAIL ###
##################

def email(fName, lName):
	# pass
	return f'{fName}.{lName}@evolveu.ca'


######################
### CANADIAN TAXES ###
######################

def taxes(income):
	if income <= 47630:
		return round(income * .15, 2)
	elif income <= 95259:
		return round((income - 47630) * .205 + 7145, 2)
	elif income <= 147667:
		return round((income - 95259) * .26 + 16908, 2)
	elif income <= 210371:
		return round((income - 147667) * .29 + 30535, 2)
	else:
		return round((income - 210371) * .33 + 48719, 2)
