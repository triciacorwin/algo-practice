function findPath(pyramid, target) {
  const rows = pyramid.length;
  const path = []; 

  // Recursive function to find the path
  function traverse(row, col, product) {
    // Base case: if the product matches the target and we are at the bottom row
    if (product === target && row === rows - 1) {
      return true; // Path found!
    }

    // Base case: if we reached beyond the bottom row or the product exceeds the target
    if (row >= rows || col >= pyramid[row].length || product > target) {
      return false; // Invalid path
    }

    // Check left path if row + 1 exists
    if (row + 1 < rows && traverse(row + 1, col, product * pyramid[row + 1][col])) {
      path.unshift("L"); // Add "L" to the path
      return true; // Path found!
    }

    // Check right path if row + 1 exists
    if (row + 1 < rows && traverse(row + 1, col + 1, product * pyramid[row + 1][col + 1])) {
      path.unshift("R"); // Add "R" to the path
      return true; // Path found!
    }

    return false; // No valid path found
  }

  // Start traversal from the top of the pyramid
  if (traverse(0, 0, pyramid[0][0])) {
    return path.join(""); // Return the path as a string
  }

  return "No valid path found.";
}

// Example usage:
const pyramid = [
  [2],
  [4, 3],
  [3, 2, 6],
  [2, 9, 5, 2],
  [10, 5, 2, 15, 5]
];
const target = 720;

// const pyramid = [
//   [1],
//   [2, 3],
//   [4, 1, 1]
// ];
// const target = 2;

const path = findPath(pyramid, target);
console.log(path); // Output: "LRLL"
