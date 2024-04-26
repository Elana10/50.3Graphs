class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let node of vertexArray){
      this.nodes.add(node)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.remove(v2);
    v2.adjacent.remove(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    const connectedVerticies = vertex.adjacent
    this.nodes.remove(vertex);

    for (let node in connectedVerticies){
      node.adjacent.remove(vertex)
    }

  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack);
    let DFSArray = []
    while (toVisitStack.length){
      let currentNode = toVisitStack.pop();

      DFSArray.push(currentNode);

      for(let node of currentNode.adjacent){
        if (!seen.has(node)){
          toVisitStack.push(node);
          seen.add(node);
        }
      }

    }
    return DFSArray;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisitQueue = [start];
    let seen = new Set(toVisitQueue);
    let BFSArray = [];

    while(toVisitQueue.length){
      let currentNode = toVisitQueue.shift();

      BFSArray.push(currentNode);

      for (let node of currentNode.adjacent){
        if(!seen.has(node)){
          toVisitStack.push(node);
          seen.add(node)
        }
      }
    }
    return BFSArray;
  }
}

module.exports = {Graph, Node}