// trust[ai,bi] - means ai trusts bi . return -1 if no town judge exists
// there is only one judge which satisfies:
// a) everybody trusts town judge --> there are unidirectional edges from all vertices to town judge vertex.
// b) town judge trusts nobody --> there are no unidirectional edges from town judge to other vertex

// Input 1: n = 2, trust = [[1,2]]
// Input 2: n = 3, trust = [[1,3],[2,3]]
// Input 3: n = 3, trust = [[1,3],[2,3],[3,1]]

// create 2 arrays - adjacencyList[] to save trusted people (i.e. whom the particular vertex trusts) -
// for town judge - adjacencyList[] should be empty.
// 2nd array - trustList[] to save who trusts a particular vertex
// for town judge - trustList[] should be equal to N - 1 (No. of vertices - 1)

class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adjacencyList = [];
    this.trustList = [];

    for (let i = 0; i < this.vertices; i++) {
      this.adjacencyList[i] = [];
      this.trustList[i] = [];
    }
  }

  addEdge(v, w) {
    if (this.adjacencyList[v].indexOf(w) >= 0) {
      return;
    }

    this.adjacencyList[v].push(w); // adding that v trusts w
    this.trustList[w].push(v); // adding that w is trusted by v
    this.edges++;
  }
}

function findJudge(townGraph, trust) {
  for (let i = 0; i < trust.length; i++) {
    townGraph.addEdge(trust[i][0] - 1, trust[i][1] - 1); // -1 is done to account for storage in trustList[] matrix
  }

  for (let i = 0; i < townGraph.vertices; i++) {
    if (townGraph.trustList[i].length === townGraph.vertices - 1) {
      // everyone trusts the judge
      return townGraph.adjacencyList[i].length === 0 ? i + 1 : -1;
    }
  }
  return -1;
}

let V = 2;
let townGraph = new Graph(V);
let trust = [[1, 2]];

console.log(findJudge(townGraph, trust));
