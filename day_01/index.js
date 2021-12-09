const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));

// const sample = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

function partOne(array) {
  let larger = 0;
  for (let i = 1; i <= array.length; i++) {
    if (array[i] > array[i - 1]) {
      larger++;
    }
  }
  return larger;
}

console.log("#1 ", partOne(input));

function partTwo(array) {
  let largerSum = 0;
  let prevTotal = 0;
  for (let i = 0; i < array.length - 2; i++) {
    let toSum = array[i] + array[i + 1] + array[i + 2];
    if (toSum > prevTotal && prevTotal !== 0) {
      largerSum++;
    }
    prevTotal = toSum;
  }
  return largerSum;
}
console.log("#2 ", partTwo(input));
