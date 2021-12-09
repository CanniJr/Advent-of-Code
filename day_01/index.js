const input = require("./input");

const sample = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

function largerMeasurements(array) {
  let larger = 0;
  for (let i = 1; i <= array.length; i++) {
    if (array[i] > array[i - 1]) {
      larger++;
    }
  }
  console.log(larger);
}

largerMeasurements(input);
