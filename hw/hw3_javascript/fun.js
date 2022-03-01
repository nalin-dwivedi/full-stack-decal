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
 * Q4. 
 */
 function changer(object, key, value) {
    var ______ = ______;
    if (Array.isArray(prev)) {
      ______;
    } else if (typeof prev == 'object' && prev != null) {
      ______ = ______;
    } else {
      ______ = ______;
    }
    return null;
  }