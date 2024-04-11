/**
 * @param {string} command
 * @return {string}
 */
function interpret(command) {
      let replaced = command.replaceAll("()","o").replaceAll("(al)","al");
      return replaced;
};