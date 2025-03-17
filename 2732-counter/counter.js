/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let m = 0;
    return function() {
        m++;
        return n + (m - 1);
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */