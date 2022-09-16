export class NLRTreeBrowser {
  static traverse = (node, onNodeVisit) => {
    onNodeVisit(node);

    const leaves = Object.values(node)[0];

    if (Array.isArray(leaves)) {
      leaves.forEach((leaf) => traverse(leaf, onNodeVisit));
    }
  };

  pos = 0;

  constructor(tree) {
    const nodes = [];
    NLRTreeBrowser.traverse(tree, (node) => analizerNodes.push(node));

    this.nodes = nodes;
  }

  advance() {
    this.pos++;
  }

  hasMoreNodes() {
    return this.pos < this.nodes.length;
  }

  getCurrentNode() {
    return this.hasMoreNodes() ? this.nodes[this.pos] : null;
  }
}
