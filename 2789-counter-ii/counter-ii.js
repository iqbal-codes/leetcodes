/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentNum = init;
    function increment() {
        return ++currentNum;
    }
    function decrement() {
        return --currentNum;
    }
    function reset() {
        return currentNum = init;
    }
    return {increment, reset, decrement};
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */