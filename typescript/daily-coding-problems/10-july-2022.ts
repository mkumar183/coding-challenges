/** have not completed it yet
 * 
 */

interface binTree {
    node:number,
    left?:binTree,
    right?:binTree
}

var node4:binTree = {
    node: 5
}

var node5:binTree = {
    node: 15
}

var node1:binTree = {
    node: 10,
    left: node4,
    right:node5
}

var node2:binTree = {
    node: 25
}

var node0:binTree = {
    node: 20,
    left:node1,
    right:node2
}


var validatebinTree = (tree:binTree):boolean => {
    if (tree.left === undefined && tree.right === undefined) return true
    if (tree.right === undefined && tree.left && tree.left.node < tree.node) return validatebinTree(tree.left)
    if (tree.left === undefined && tree.right && tree.right.node > tree.node) return validatebinTree(tree.right)
    if (tree.left && tree.right && tree.left.node < tree.node && tree.right.node > tree.node ){
        validatebinTree(tree.left);
        validatebinTree(tree.right);
    }
    return false;
}
