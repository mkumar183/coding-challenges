/**
 * This problem was asked by Adobe.
 * You are given a tree with an even number of nodes. Consider each connection between a parent 
 * and child node to be an "edge". You would like to remove some of these edges, such that the 
 * disconnected subtrees that remain each have an even number of nodes.
 * For example, suppose your input was the following tree:
   1
  / \ 
 2   3
    / \ 
   4   5
 / | \
6  7  8
* In this case, removing the edge (3, 4) satisfies our requirement.
* Write a function that returns the maximum number of edges you can remove while still satisfying this requirement.
* */

interface tree {
    node:number,
    child?:Array<tree>
}

let treeSize = (t:tree):number => {
    if (!t.child || t.child.length === 0){
        return 1;
    }
    let size:number = 1
    for (let node of t.child){
        size += treeSize(node);
    }
    return size;
}

let breakTree = (t:tree):void => {
    if (!t.child || t.child.length === 0){
        return;
    }
    for(let node of t.child){
        if (treeSize(node) % 2 === 0) {
            console.log(t.node, node.node);
            breakTree(node);
        }
    }
}

let main_14_09_2022 = () => {
    let t6:tree = {
        node: 6
    }

    let t7:tree = {
        node: 7
    }

    let t8:tree = {
        node: 8
    }

    let t4:tree = {
        node: 4,
        child: [t6, t7, t8]
    }

    let t5:tree = {
        node: 5
    }

    let t2:tree = {
        node: 2
    }

    let t3:tree = {
        node: 3,
        child: [t4, t5]
    }

    let t1:tree = {
        node:1,
        child:[t2,t3]
    }
    // console.log(treeSize(t2))
    // console.log(treeSize(t3))
    // console.log(treeSize(t1))
    breakTree(t1);
}

main_14_09_2022();
