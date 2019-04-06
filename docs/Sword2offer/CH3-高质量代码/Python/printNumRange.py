class Ranger:
  def __init__(self, nums):
    self.nums = nums
  
  def __get_range(self, n):
    if n == 1:
      return self.nums
    current_range = []
    current_count = n - 1
    if current_count >= 1:
      last_range = self.__get_range(current_count)
      for pre in self.nums:
        current_row = []
        for tail in last_range:
          num = pre + tail
          current_row.append(num)
        current_range += current_row
    return current_range
  
  def get_range(self, n):
    return self.__get_range(n)

ranger = Ranger(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
print(ranger.get_range(3))
