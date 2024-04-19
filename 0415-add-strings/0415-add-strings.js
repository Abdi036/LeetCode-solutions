/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
    const number1 = BigInt(num1)
    const number2 = BigInt(num2)

    return number1 + number2 + ""
};