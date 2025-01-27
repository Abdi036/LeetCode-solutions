class Solution:
    def dividePlayers(self, skill: List[int]) -> int:
      skill.sort()
      left = 0
      right = len(skill) - 1
      chemistry = 0
      totalSkill = skill[left] + skill[right]
    #   [1,2,3,3,4,5]
      while left < right:
        prod = (skill[left] * skill[right])
        skillSum = skill[left] + skill[right]
        if totalSkill == skillSum:
            chemistry += prod
            left += 1
            right -= 1
        else:
            return -1
      return chemistry
