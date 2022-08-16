function doSearch(array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;
  var count = 0; // 총 guessing한 수를 알기 위함

  while (max >= min) {
    guess = Math.floor((min + max) / 2);
    count++;

    if (array[guess] === targetValue) {
      console.log("number of guessed numbers: ", count);

      return guess;
    } else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
}

var primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

var result = doSearch(primes, 11);
console.log("the result is...", result);
