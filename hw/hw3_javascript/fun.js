/**
 * Q1. Implement the following function to take an iterable (essentially a list of things) and
 * return the item in the list corresponding to the maximum value in list after applying key to
 * each time.
 */
function max(iterable, key) {
    var maximum = key(iterable[0]);
    for (var val in iterable) { // for in loop to iterate thru all elements of the iterable
      var postKey = key(val); // after applying func key to val
      if (postKey >= maximum) { // see if max needs to be reset
        maximum = postKey;
      }
    }
    return maximum;
}

/**
 * Q2. Based on the previous question, in one line, write an anonymous function which, when passed
 * as key to max would cause max to return the smallest value in the list.
 */
 const reverser = (iterable, key) => -1 * max(iterable.map(x => -1 * x), key);

