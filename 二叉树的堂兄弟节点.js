/**
 * 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

  如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

  我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

  只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

 */


// 递归的方式遍历树 🌲
const isCousin = (root, x, y) => {
  const treeArray = [];

  const toArray = (tree) => {
    const { val, left, right } = tree;
    treeArray.push(val);
    (left instanceof Object) ? toArray(left) : treeArray.push(left);
    (right instanceof Object) ? toArray(right) : treeArray.push(right);
  };

  toArray(root);
  console.log(treeArray);

  if (!Array.isArray(treeArray)) return false;
    // 求两节点深度
  const indexX = treeArray.indexOf(x);
  const indexY = treeArray.indexOf(y);
  const deepX = Math.floor(Math.sqrt(indexX));
  const deepY = Math.floor(Math.sqrt(indexY));
  // 求父节点
  const parentX = Math.floor(indexX / 2);
  const parentY = Math.floor(indexY / 2);
  return (deepX === deepY && parentX !== parentY);
};

const root = {
  val: 1,
  left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
  right: { val: 3, left: null, right: null },
};
// todo: 遍历树，找到x节点深度、父节点；找到y节点深度、父节点

const x = 4;
const y = 3;
console.log('isCousin:', isCousin(root, x, y))

