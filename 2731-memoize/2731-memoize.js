/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};
    return function(...args) {
        let par = JSON.stringify(args);
        if(par in cache){
            return cache[par];
        }
        const result = fn(...args);
        cache[par] = result;
        return result; 
    }
};

