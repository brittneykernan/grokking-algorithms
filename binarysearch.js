const numbersToSearch = [1, 3, 5, 18, 29, 100];

function findIndexInArray(item, arr) {
  let startIndex = 0;
  let endIndex = arr.length;

  while (startIndex !== endIndex) {
    let midIndex = Math.floor(endIndex / 2);
    let midNumber = arr[midIndex];

    if (item === midNumber) {
      return midIndex;
    } else if (item < midNumber) {
      endIndex = midIndex;
    } else if (item > midNumber) {
      startIndex = midIndex;
    }
  }

  return null;
}

const index = findIndexInArray(18, numbersToSearch);
console.log('index ' + index);
