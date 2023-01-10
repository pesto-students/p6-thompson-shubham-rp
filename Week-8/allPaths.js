// given a directed graph, find all possible from node 0 to n-1
// and return them in any order . source to destination.

// do DFS traversal of a given graph
// keep storing visited vertices in an array or map
// if destination vertex is reached then return that stored vertices
// mark current vertices in that path as visited so that traversal is not repeated

let N = 4; // no. of vertices

let adjacencyList = [];

for (let i = 0; i < N; i++) adjacencyList.push([]);

function addEdge(v, w) {
  adjacencyList[v].push(w);
}

function printAllPaths(s, d) {
  let isVisited = new Array(N).fill(false);

  let pathList = [];

  pathList.push(s);

  printAllPathsUtil(s, d, isVisited, pathList);
}

function printAllPathsUtil(a, d, isVisited, localPathList) {
  if (a === d) {
    console.log(localPathList);
    return;
  }

  isVisited[a] = true;

  for (let i = 0; i < adjacencyList[a].length; i++) {
    if (!isVisited[adjacencyList[a][i]]) {
      localPathList.push(adjacencyList[a][i]);
      printAllPathsUtil(adjacencyList[a][i], d, isVisited, localPathList);

      localPathList.splice(localPathList.indexOf(adjacencyList[a][i]), 1);
    }
  }
  isVisited[a] = false;
}

// input 1
addEdge(0, 1);
addEdge(0, 2);
addEdge(2, 3);
addEdge(1, 3);

let s = 0;
let d = 3;

printAllPaths(s, d);

// TC - O(N^N) - in worst case, N vertices needs to be traversed from each vertex to reach the destination.
// SC - O(N^N) - to store all those possible paths in worst case.
