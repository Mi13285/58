function convertHashToArray(hash) {
  return Object.entries(hash);
}
console.log(convertHashToArray({ name: "Jeremy" }));
console.log(convertHashToArray({ name: "Jeremy", age: 24 }));
console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
);
console.log(convertHashToArray({}));
function checkExam(correctAnswers, studentAnswers) {
  let score = 0;
  for (let index = 0; index < correctAnswers.length; index++) {
    if (correctAnswers[index] === studentAnswers[index]) {
      score += 4;
    } else if (studentAnswers[index] === "") {
      score -= 0;
    } else {
      score -= 1;
    }
  }
  if (score < 0) {
    score = 0;
  }
  return score;
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
