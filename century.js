// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

function century(year) {
  let newCentury = 0;
  while (year > 0) {
    year = year - 100;
    newCentury = newCentury + 1;
  }
  return newCentury;
}
