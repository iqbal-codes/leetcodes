var TimeLimitedCache = function () {
    this.cache = new Map();
    this.timeoutCacheIds = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    // if key exists, remove it from timeout cache
    let result = false;
    if (this.cache.has(key)) {
        result = true;
        clearTimeout(this.timeoutCacheIds[key]);
    }

    // set key in cache
    this.cache.set(key, value);

    // set timeout for key
    this.timeoutCacheIds[key] = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    return result;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    return this.cache.get(key) || -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.cache.size;
};