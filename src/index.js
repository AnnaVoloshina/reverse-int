module.exports = function reverse (n) {
  if (n < 0) n = -n;
  return +(String(n).split('').reverse().join(''));
}
