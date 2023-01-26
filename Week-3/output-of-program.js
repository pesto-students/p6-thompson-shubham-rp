function createIncrement() {
  let count = 0;

  function increment() {
    count++;
    console.log(`the count here is ${count}`);
  }

  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// The above program will console log "Count is 0" as the message variable is initialized on line 18 with the value of count = 0; & will remain unchanged even if count is incremented later.
//if we move the line -> let message = `Count is ${count}`; <- inside log() function we will get count as 3.
