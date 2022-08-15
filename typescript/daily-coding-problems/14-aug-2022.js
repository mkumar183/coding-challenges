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
var treeSize = function (t) {
    if (!t.child || t.child.length === 0) {
        return 1;
    }
    var size = 1;
    for (var _i = 0, _a = t.child; _i < _a.length; _i++) {
        var node = _a[_i];
        size += treeSize(node);
    }
    return size;
};
var breakTree = function (t) {
    if (!t.child || t.child.length === 0) {
        return;
    }
    for (var _i = 0, _a = t.child; _i < _a.length; _i++) {
        var node = _a[_i];
        if (treeSize(node) % 2 === 0) {
            console.log(t.node, node.node);
            breakTree(node);
        }
    }
};
var main_14_09_2022 = function () {
    var t6 = {
        node: 6
    };
    var t7 = {
        node: 7
    };
    var t8 = {
        node: 8
    };
    var t4 = {
        node: 4,
        child: [t6, t7, t8]
    };
    var t5 = {
        node: 5
    };
    var t2 = {
        node: 2
    };
    var t3 = {
        node: 3,
        child: [t4, t5]
    };
    var t1 = {
        node: 1,
        child: [t2, t3]
    };
    // console.log(treeSize(t2))
    // console.log(treeSize(t3))
    // console.log(treeSize(t1))
    breakTree(t1);
};
main_14_09_2022();
