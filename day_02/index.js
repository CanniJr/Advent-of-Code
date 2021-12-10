const fs = require("fs");

const input = fs.readFileSync("input.txt", { encoding: "utf-8" }).split("\n");

const sample = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
];

const partOne = (commands) => {
  let progress = 0; //horizontal
  let depth = 0;
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i].split(" ")[0];
    let count = parseInt(commands[i].split(" ")[1]);
    if (command === "forward") {
      progress += count;
    } else if (command === "down") {
      depth += count;
    } else if (command === "up") {
      depth -= count;
    }
  }

  return progress * depth;
};

console.log(partOne(input));

const partTwo = (commands) => {
  let progress = 0; //horizontal
  let depth = 0;
  let aim = 0;
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i].split(" ")[0];
    let count = parseInt(commands[i].split(" ")[1]);
    if (command === "down") {
      aim += count;
    } else if (command === "up") {
      aim -= count;
    } else {
      progress += count;
      depth += aim * count;
    }
  }
  return progress * depth;
};

console.log(partTwo(input));
