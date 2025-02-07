// make a line
// make a square
// make a pyramid


let lineMaker = function(num) {
  let line = ''
  for (let i = 0; i < num; i += 1) {
    line += 'x'
  }
  return line;
}

console.log(lineMaker(3))

function printSquare(num) {
  for (let i = 0; i < num; i++) {
    let row = "1";
    for (let j = 0; j < num; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

console.log(printSquare(5))