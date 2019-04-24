import xlsxwriter
import names
import random 
from datetime import date

workbook = xlsxwriter.Workbook('comp_230.xlsx')
worksheet = workbook.add_worksheet('february_2019conda ')

bold = workbook.add_format({'bold': True})
money = workbook.add_format({'num_format': '$#,##0'})
date_format = workbook.add_format({'num_format': 'yyyy-mm-dd'})

worksheet.write(0, 0, 'date', bold)
worksheet.write(0, 1, 'name', bold)
worksheet.write(0, 2, 'invoice', bold)
worksheet.write(0, 3, 'items', bold)
worksheet.write(0, 4, 'amount', bold)

start = date(2019, 2, 1)
end = date(2019, 2, 28)
random_names = []
invoice = 1000

for i in range(1, 75):
  random_date = start + (end - start) * random.random()
  worksheet.write(i, 0, random_date, date_format)

for i in range(1, 10):
	random_names.append(names.get_full_name())

for i in range(1, 75):
	worksheet.write(i, 1, str(random.choice(random_names)))
	
	# random_invoice = random.randint(1, 1000)
	# worksheet.write(i, 2, random_invoice)
	
	worksheet.write(i, 2, invoice)
	invoice += 1

	random_items = random.randint(1, 10)
	worksheet.write(i, 3, random_items)

	random_amount = random.randint(500, 25000)
	worksheet.write(i, 4, random_amount, money)

worksheet.data_validation('D2:D1000', {
	'validate': 'integer',
	'criteria':'>',
	'value': 0
	})

worksheet.data_validation('A2:A1000', {
	'validate': 'date',
	'criteria': 'between',
	'minimum': start,
	'maximum': end
	})

worksheet.data_validation('C2:C1000', {
	'validate': 'custom',
	'criteria':'>',
	'value': 0
	})

workbook.close()
