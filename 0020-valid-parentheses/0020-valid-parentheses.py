class Solution:
    def isValid(self, s: str) -> bool:
         opening_brackets = ['(', '[', '{']
         closing_brackets = [')', ']', '}']
         stack = []

         for char in s:
            if char in opening_brackets:
                stack.append(char)
            elif char in closing_brackets:
                expected_opening = opening_brackets[closing_brackets.index(char)]
                if not stack or stack.pop() != expected_opening:
                    return False

         return len(stack) == 0