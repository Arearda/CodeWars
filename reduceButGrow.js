// Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x) {
  let counter = x[0];
  for (let i = 1; i < x.length; i++) {
    counter = counter * x[i];
  }
  return counter;
}

grow(1, 2, 3);
