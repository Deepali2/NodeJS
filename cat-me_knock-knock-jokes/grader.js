function average(array) {
  return Math.round((array.reduce((a, b)=> a + b))/array.length);
}

let scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));