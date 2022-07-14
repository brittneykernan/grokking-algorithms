const data = [
  {
    name: 'cool bean',
    count: 4,
  },
  {
    name: 'cool bean',
    count: 40,
  },
  {
    name: 'cool bean',
    count: 400,
  },
  {
    name: 'cool bean',
    count: 987,
  },
  {
    name: 'cool bean',
    count: 33,
  },
  {
    name: 'cool bean',
    count: 189,
  },
];

function getHighestCountIndex(data) {
  let highestCount = 0;
  let highestCountIndex;

  data.forEach((elem, index) => {
    if (elem.count > highestCount) {
      highestCount = elem.count;
      highestCountIndex = index;
    }
  });

  return highestCountIndex;
}

function sortDataByCount(data) {
  const newData = [];

  while (data.length) {
    const highestCountIndex = getHighestCountIndex(data);
    const highestCountItem = data.splice(highestCountIndex, 1)[0];

    newData.push(highestCountItem);
  }

  return newData;
}

const sortedData = sortDataByCount(data);
console.log(sortedData);
