const temperatures = [1, 3, 13, -2, 0, -31, 10];
function getAboveZero(temperatures) {
  let result = temperatures.filter((num) => {
    return num > 0;
  });
  return result;
}
console.log(getAboveZero(temperatures));
