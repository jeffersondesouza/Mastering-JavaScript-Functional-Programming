/* 
  EmptyTree();
  Tree(value, leftTree, rightTree);
*/
const Tree = (value, left, right) => (destructure, __) =>
  destructure(value, left, right);

const EmptyTree = () => (__, destructure) => destructure();

const treeRoot = tree => tree((value, left, right) => value, () => null);
const treeLeft = tree => tree((value, left, right) => left, () => null);
const treeRight = tree => tree((value, left, right) => right, () => null);

const treeToObject = tree =>
  tree(
    (value, left, right) => {
      const leftBranch = treeToObject(left);
      const rightBranch = treeToObject(right);
      const result = { value };
      if (leftBranch) {
        result.left = leftBranch;
      }
      if (rightBranch) {
        result.right = rightBranch;
      }
      return result;
    },
    () => null
  );

const treeSearch = (findValue, tree) =>
  tree(
    (value, left, right) =>
      findValue === value
        ? true
        : findValue < value
        ? treeSearch(findValue, left)
        : treeSearch(findValue, right),
    () => false
  );

const treeInsert = (newValue, tree) =>
  tree(
    (value, left, right) =>
      newValue <= value
        ? Tree(value, treeInsert(newValue, left), right)
        : Tree(value, left, treeInsert(newValue, right)),
    () => Tree(newValue, EmptyTree(), EmptyTree())
  );

/* ################# */

const myTree = Tree(
  22,
  Tree(
    9,
    Tree(4, EmptyTree(), EmptyTree()),
    Tree(12, EmptyTree(), EmptyTree())
  ),
  Tree(60, Tree(56, EmptyTree(), EmptyTree()), EmptyTree())
);

const treeCount = aTree =>
  aTree(
    (value, left, right) => 1 + treeCount(left) + treeCount(right),
    () => 0
  );

console.log(treeCount(myTree));

console.log("myTree:", treeSearch(56, myTree));

console.log(treeToObject(myTree));
treeInsert(666, myTree);

console.log(treeToObject(myTree));
