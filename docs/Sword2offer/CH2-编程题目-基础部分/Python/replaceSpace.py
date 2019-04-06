def replaceSpacce (str, target):
  return target.join(str.split(' '))

str = 'We are happy'
print(replaceSpacce(str, '%20'))
