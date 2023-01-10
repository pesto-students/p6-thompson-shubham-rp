const hasDuplicate = (arr) => {
  let newArraySet = new Set(arr);

  /*
  console.log(newArraySet);
  console.log(newArraySet.size);
  console.log(arr.length);
  */

  if (newArraySet.size !== arr.length) {
    console.log(true);
  } else {
    console.log(false);
  }
};

hasDuplicate([5, 7]);
