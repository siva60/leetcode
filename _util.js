function ListNode(val) {
    this.val = val;
    this.next = null;
}

function al(arr) {
  var head = new ListNode();
  var current = head;
  arr.forEach(function (item) {
    current.next = new ListNode(item);
    current = current.next;
  });

  return head.next;
}


function la(node) {
  var ans = [];
  while(node) {
    ans.push(node.val)
    node = node.next;
  }

  return ans;
}

exports.nodeList = {
  create: al,
  toArray: la
};


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// https://leetcode.com/faq/#binary-tree
function createTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  var len = arr.length;

  var res = new TreeNode(arr[0]);
  var nodes = arr.slice(1);
  var children = [res];
  var current = res;
  while(children.length) {
    current = children.shift();

    if (!current || current.val === null) {
      continue;
    }

    if (nodes.length) {
      current.left = new TreeNode(nodes.shift());
      children.push(current.left);
    }

    if (nodes.length) {
      current.right = new TreeNode(nodes.shift())
      children.push(current.right);
    }
  }

  return res;
}

exports.tree = {
  createTree: createTree
};
