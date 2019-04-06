def exp (base, expo): 
  if base == 0:
    return 0
  if expo == 0:
    return 1
  result = 1
  for i in range(abs(expo)):
    result *= base
  return 1 / result if expo < 0 else result

print(exp(2, 3))
print(exp(2, -3))
print(exp(2, 0))
print(exp(0, 3))