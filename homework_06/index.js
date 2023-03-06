Promise.all = function (promises) {
  // return a promise that resolves when all promises resolve.
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    // for each value, resolve a promise.
    // store the result, and check if we are done
    promises.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          results[index] = result;
          completed += 1;

          // if we completed all promises, resolve
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};
