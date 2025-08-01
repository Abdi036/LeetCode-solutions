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


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */