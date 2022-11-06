function getNumber() {
  return Math.floor(Math.random() * 1000);
}

function promiseChecker(randomNumber) {
  return randomNumber % 5 !== 0 ? true : false; // return true if number is not divisible by 5, return false if number is divisible by 5
}

class PromiseClass {
  constructor(handler) {
    this.status = "pending";
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn(value));
      }
    };
    const reject = (value) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.value = value;
        this.onRejectedCallbacks.forEach((fn) => fn(value));
      }
    };

    const handlePromise = (resolve, reject) => {
      let randomNumber = getNumber();
      if (promiseChecker(randomNumber)) {
        resolve(
          randomNumber + " is not divisible by 5. Hence promise is resolved"
        );
      } else {
        reject(randomNumber + " is divisible by 5. Hence promise is rejected");
      }
    };

    try {
      handler(handlePromise, resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  // then(onFulfilled, onRejected) {
  //   if (this.status === "pending") {
  //     this.onFulfilledCallbacks.push(onFulfilled);
  //     this.onRejectedCallbacks.push(onRejected);
  //   }

  //   if (this.status === "fulfilled") {
  //     onFulfilled(this.value);
  //   }

  //   if (this.status === "rejected") {
  //     onRejected(this.value);
  //   }
  // }

  then(onFulfilled, onRejected) {
    return new PromiseClass((handlePromise, resolve, reject) => {
      if (this.status === "pending") {
        this.onFulfilledCallbacks.push(() => {
          try {
            const fulfilledFromLastPromise = onFulfilled(this.value);
            if (fulfilledFromLastPromise instanceof Promise) {
              fulfilledFromLastPromise.then(resolve, reject);
            } else {
              resolve(fulfilledFromLastPromise);
            }
          } catch (err) {
            reject(err);
          }
        });
        this.onRejectedCallbacks.push(() => {
          try {
            const rejectedFromLastPromise = onRejected(this.value);
            if (rejectedFromLastPromise instanceof Promise) {
              rejectedFromLastPromise.then(resolve, reject);
            } else {
              reject(rejectedFromLastPromise);
            }
          } catch (err) {
            reject(err);
          }
        });
      }

      if (this.status === "fulfilled") {
        try {
          const fulfilledFromLastPromise = onFulfilled(this.value);
          if (fulfilledFromLastPromise instanceof Promise) {
            fulfilledFromLastPromise.then(resolve, reject);
          } else {
            resolve(fulfilledFromLastPromise);
          }
        } catch (err) {
          reject(err);
        }
      }

      if (this.status === "rejected") {
        try {
          const rejectedFromLastPromise = onRejected(this.value);
          if (rejectedFromLastPromise instanceof Promise) {
            rejectedFromLastPromise.then(resolve, reject);
          } else {
            reject(rejectedFromLastPromise);
          }
        } catch (err) {
          reject(err);
        }
      }
    });
  }
}

// testing code

let p1 = new PromiseClass((handlePromise, resolve, reject) => {
  setTimeout(handlePromise(resolve, reject), 2000);
});
p1.then((res) => {
  console.log(res);
  return new PromiseClass((handlePromise, resolve, reject) => {
    setTimeout(handlePromise(resolve, reject), 2000);
  });
}).then((res) => {
  console.log(res.value);
});
