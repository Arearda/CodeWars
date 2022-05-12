//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  if (average >= 90) {
    return "A";
  } else if (80 <= average && average < 90) {
    return "B";
  } else if (70 <= average && average < 80) {
    return "C";
  } else if (60 <= average && average < 70) {
    return "D";
  } else {
    return "F";
  }
}
