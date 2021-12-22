"use strict";

function getBestStudent(obj) {
  let stat = 0;
  let studentName = "";
  let mek = 0;
  for (let student in obj) {
    const res =
      obj[student].reduce((aggr, val) => aggr + val) / obj[student].length;
    if (res > stat) {
      studentName = student;
      stat = res;
    }
  }
  return studentName;
}
console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
);
