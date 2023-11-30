/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (openingBrackets.includes(s[i])) {
      stack.push(s[i]);
    } else if (closingBrackets.includes(s[i])) {
      const expectedOpeningBracket = openingBrackets[closingBrackets.indexOf(s[i])];
      if (stack.pop() !== expectedOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}