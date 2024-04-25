/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
function decode(encoded, first) {
    let container = [first]
    for(let i = 0; i < encoded.length; i++){
        container.push(container[i] ^ encoded[i])
    }
   return container
};