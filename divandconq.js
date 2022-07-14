function sum(list) {
  if (list.length === 1) {
    return list[0];
  } else {
    return list[0] + sum(list.splice(1));
  }
}

console.log(sum([5, 5, 5]));

function countItemsInList(arr) {
  if (typeof arr[0] === 'undefined') {
    return 0;
  } else {
    return 1 + countItemsInList(arr.slice(1));
  }
}

function findMaxNumberIn(arr) {
  const first = arr[0];

  if (arr.length === 1) {
    return first;
  }

  const last = findMaxNumberIn(arr.splice(1));

  if (first > last) {
    return first;
  } else {
    return last;
  }
}

const list = [1, 3, 5, 63, 4, 5, 6, 6, 400, 3, 4, 2];
const count = countItemsInList(list);
// console.log(count, list);

// console.log(findMaxNumberIn(list));
