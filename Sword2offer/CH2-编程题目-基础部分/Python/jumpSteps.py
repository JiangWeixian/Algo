class Jump:
  def __init__(self, steps):
    self.cached = {}
    self.steps = steps

  def __update_theory(self, step, last_theory):
    current_theory = []
    for theory in last_theory:
      theory.append(step)
      current_theory.append(theory)
    return current_theory
  
  def __find_theory(self, target):
    theory = []
    if target <= 0:
      self.cached[target] = [[]]
      return [[]]
    for step in self.steps:
      new_theory = []
      new_target = target - step
      if new_target >= 0:
        new_theory = self.__update_theory(step, self.__find_theory(new_target))
        theory += new_theory
    self.cached[target] = theory
    return theory
  
  def find_theory(self, target):
    if target in self.cached:
      return self.cached[target]
    else:
      return self.__find_theory(target)


jump = Jump([1, 2])
print(jump.find_theory(0))
print(jump.find_theory(1))
print(jump.find_theory(2))
# print('性能测试')
print(jump.find_theory(3))
print(jump.find_theory(5))
print(jump.find_theory(10))
print(jump.find_theory(100))