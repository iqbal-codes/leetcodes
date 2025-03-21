/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    for (key in obj) {
        return false
    }
    return true
};