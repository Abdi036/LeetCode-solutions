class Solution:
    def countTestedDevices(self, batteryPercentages: List[int]) -> int:
         count = 0
         drain = 0

         for battery in batteryPercentages:
            if battery - drain > 0:
                count += 1
                drain += 1
         return count