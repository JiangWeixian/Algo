def count (num):
  count = 0
  string = str(bin(num))
  for i in range(2, len(string)):
    if string[i] == '1':
      count += 1
  return count

print(count(9))