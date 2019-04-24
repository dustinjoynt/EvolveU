import csv

# data = csv.DictReader(open("Census_by_Community_2018.csv", 'r'))

# l = []
# d = {}

# for row in data:
# 	community = row['CLASS']
# 	count = row['RES_CNT']
# 	l.append((community, count))

# for k,v in 

data = csv.DictReader(open("Census_by_Community_2018.csv", 'r'))
data2 = csv.DictReader(open("Census_by_Community_2018.csv", 'r'))

file = open("newfile2.txt", "w")

dic: dict = {}
dic2: dict = {}
count = 0

for row in data:
  dic[row['SECTOR']] = 0
  dic2[row['CLASS']] = 0indo

for row in data2:
  dic[row['SECTOR']] += int(row['RES_CNT'])
  dic2[row['CLASS']] += int(row['RES_CNT'])
  count = count + 1

file.write(f'THE REPORT:\n\nBY SECTOR:\n\n')
for key,val in dic.items():
	file.write(f'{key} {val}\n')

file.write(f'\nBY CLASS:\n\n')
for key,val in dic2.items():
	file.write(f'{key} {val}\n')

file.write(f'\nCOUNT: {count}')

# print('keys SECTOR:', dic, 'keys CLASS:', dic2, '#lines: ', count)

# for key2,val2 in dic2.items()


# file.write(f'The report: keys SECTOR: {dic} keys CLASS: {dic2} #lines:{count}')
file.close()