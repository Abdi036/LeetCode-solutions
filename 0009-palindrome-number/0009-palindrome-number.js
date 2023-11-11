/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  const value = String(x);
  const reversedValue = value.split('').reverse().join('');
  return value === reversedValue ? true : false;
}
 