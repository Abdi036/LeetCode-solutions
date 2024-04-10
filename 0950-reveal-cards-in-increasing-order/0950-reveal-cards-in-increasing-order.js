/**
 * @param {number[]} deck
 * @return {number[]}
 */
function deckRevealedIncreasing(deck) {
    deck.sort((a,b) => a - b);
    let indexArr = [];
    let res = Array.from(deck.length);
    let lastEl;

    for(let i = 0; i < deck.length; i++){
        indexArr.push(i)
    }
    for(let i = 0; i < deck.length; i++){
       res[indexArr[0]] = deck[i];
        indexArr.shift();
        lastEl = indexArr.shift();
        indexArr.push(lastEl);
    }
 return res;
};