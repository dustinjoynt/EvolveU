import os


## Path to basic.js: /Users/dustinjoynt/documents/evolveu/evolveu/javascript/basic.js

fname = input("enter file name:")

## number of lines in file
num_lines = 0
with open(fname, 'r') as f:
	for line in f:
		num_lines += 1
print(f"Number of lines: {num_lines}")

## number of else statements in file
num_else = 0
with open(fname, 'r') as f:
	for line in f:
		if 'else' in line:
			num_else += 1
print(f"Number of 'else' statements: {num_else}")

## number of characters in file
with open(fname, 'r') as f:
	num_char = len(f.read())
print(f"Number of characters: {num_char}")

# DIRECTORY
path1 = "/Users/dustinjoynt/documents/evolveu/evolveu/python"
dirs = os.listdir(path1)
print(dirs)
total_size = 0
for file in dirs:
    # print("FILE: ", file)
    total_size = total_size + os.path.getsize(
        f'/Users/dustinjoynt/documents/evolveu/evolveu/python/{file}')
    # print("file size: ", os.path.getsize(
    #     f'/users/user/Desktop/evolveu/python/{file}'), 'bytes')
print("TOTAL:", total_size, ' bytes')


