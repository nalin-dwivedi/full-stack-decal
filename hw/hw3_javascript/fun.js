/**
 * Q1. Implement the following function to take an iterable (essentially a list of things) and
 * return the item in the list corresponding to the maximum value in list after applying key to
 * each time.
 */
function max(iterable, key) {
    var maximum = [key(iterable[0]), iterable[0]]; // key is used to establish an ordering
    for (var i in iterable) { // note: for-in loop is not recommended for iterating over arrays
      var postKey = key(iterable[i]);
      if (postKey >= maximum[0]) {
        maximum = [postKey, iterable[i]];
      }
    }
    return maximum[1];
}
  
console.log(max([1, 2, 100, 4, 5], x => x)); // ad-hoc test

/**
 * Q2. Based on the previous question, in one line, write an anonymous function which, when passed
 * as key to max would cause max to return the smallest value in the list.
 */
const reverser = x => -1 * x;

console.log(max([1, -2, -100, 4, 5], reverser)); // ad-hoc test

/**
 * Q4. We want to create a general purpose function to keep records. We pass a JSON object, key,
 * and value to our function, and in return, our function should do the following:
 * - If the current value of the item at key is a singular item, update the key to correspond 
 * to value.
 * - If the current value of the item at key is a list, append value to the list
 * - If the current value of the item at key is another JSON object, create a new entry using key
 * as the key and value as the value.
 */
function changer(object, key, value) {
    var prev = JSON.parse(object)[key];
    if (Array.isArray(prev)) {
      prev.push(value);
    } else if (typeof prev == 'object' && prev != null) {
      prev[key] = value;
    } else {
      JSON.parse(object)[key] = value;
    }
    return null;
}

/**
 * In this function, we want to print the numbers 1, 2, 3, 4, 5 in numerical order. Using Promises,
 * fill in the function to print numbers in the correct order.
 */
 async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(_____)
        ______(______)
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = ______ ______
    console.log(five)
    return five
}
