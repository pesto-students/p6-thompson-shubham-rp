let N = 6; // no. of vertices

let adjacencyList = [];

for (let i = 0; i < N; i++) adjacencyList.push([]);

function addEdge(v, w) {
  adjacencyList[v].push(w);
  adjacencyList[w].push(v);
}

// Using BFS

function isReachable(s, d) {
  // s - source ; d - destination
  if (s == d) return true;

  let visited = new Array(N).fill(false);

  let queue = new Array(); // for BFS

  visited[s] = true;
  queue.push(s);

  while (queue.length !== 0) {
    s = queue.pop();

    for (let i = 0; i < adjacencyList[s].length; i++) {
      if (adjacencyList[s][i] == d) return true;

      if (!visited[adjacencyList[s][i]]) {
        visited[adjacencyList[s][i]] = true;
        queue.push(adjacencyList[s][i]);
      }
    }
  }
  return false; // If after going through entire tree destination vertex is not found
}

// input 1
// addEdge(0, 1);
// addEdge(1, 2);
// addEdge(2, 0);

// input 2
// N = 6;
addEdge(0, 1);
addEdge(0, 2);
addEdge(3, 5);
addEdge(3, 4);
addEdge(4, 5);

let a = 0,
  b = 5;
if (isReachable(a, b)) console.log("There is a path from " + a + " to " + b);
else console.log("There is no path from " + a + " to " + b);

// TC - O(V) - No. of vertices
// SC - O(V) - visited array of size == no. of vertices
