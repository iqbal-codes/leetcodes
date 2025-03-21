/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  const results = new Array(functions.length);
  let completed = 0;

  return new Promise((resolve, reject) => {
    functions.forEach((fn, index) => {
      fn()
        .then((value) => {
          results[index] = value;
          completed++;
          if (completed === functions.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */