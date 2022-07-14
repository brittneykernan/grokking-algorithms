const graph = {
  you: ['jake', 'jen', 'brayleah'],
  brayleah: ['ach'],
  jen: ['jean', 'jake'],
  jake: ['jen', 'john'],
  john: ['julie'],
  jean: [],
  julie: [],
};

function shortestConnectionFrom(from, to) {
  let queue = [...graph[from]];
  const searched = {};

  while (queue.length) {
    const connection = queue.shift();

    if (connection === to) {
      return 'found';
    } else if (searched[connection]) {
      continue;
    } else if (graph[connection] && graph[connection].length) {
      queue = queue.concat(graph[connection]);
    }
    searched[connection] = true;
  }

  return 'not found';
}

console.log(shortestConnectionFrom('you', 'ach')); // 2
console.log(shortestConnectionFrom('you', 'julie')); // 3
console.log(shortestConnectionFrom('you', 'bud')); // 0
