var sha1 = require("sha1");
var names = [
    "Alcee Hastings",
    "Alfred Lawson",
    "Bill Posey",
    "Brian Mast",
    "Carlos Curbelo",
    "Charlie Crist",
    "Daniel Webster",
    "Darren Soto",
    "Debbie Wasserman Schultz",
    "Dennis Ross",
    "Francis Rooney",
    "Frederica Wilson",
    "Gus Bilirakis",
    "Ileana Ros-Lehtinen",
    "John Rutherford",
    "Kathy Castor",
    "Lois Frankel",
    "Mario Diaz-Balart",
    "Matt Gaetz",
    "Neal Dunn",
    "Stephanie Murphy",
    "Ted Deutch",
    "Ted Yoho",
    "Thomas Rooney",
    "Val Demings",
    "Vern Buchanan"];

var hashCode = new Array();
for (var i = 0; i < names.length; i++) {
    hashCode.push(sha1(names[i]));
    console.log("Hash Code for " + names[i] + " : " + hashCode[i]);
}

function BinarySearchTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function (passedValue) {
    let subtree = passedValue < this.value ? 'left' : 'right';
    if (this[subtree]) {
        this[subtree].insert(passedValue);
    } else {
        this[subtree] = new BinarySearchTree(passedValue);
    }
};
var newTree = new BinarySearchTree(hashCode.shift());
for (k = 0; k < hashCode.length; k++) {
    newTree.insert(hashCode.shift());
}

BinarySearchTree.prototype.contains = function (value) {
    if (this.value === value) {
        return true;
    }
    let subtree = value < this.value ? "left" : "right";
    if (this[subtree]) {
        return this[subtree].contains(value);
    } else {
        return false;
    }
};

BinarySearchTree.prototype.getMin = function () {
    if (this.left) {
        return this.left.getMin();
    } else {
        return this.value;
    }
}

var hashCode = new Array();
for (var i = 0; i < names.length; i++) {
    hashCode.push(sha1(names[i]));
}

var minCongressName = [];
minCongressName = hashCode.indexOf(newTree.getMin());

var d = new BinarySearchTree("Daniel Webster");

console.log('Binary Search Tree' + newTree);
console.log('Min Hash : ' + newTree.getMin());
console.log('Min Hash Congressman Name :' + names[minCongressName]);
console.log('Searching for d name : ' + d.contains("Daniel Webster"));