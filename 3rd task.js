const bags = [1234, 4504, 1902, 4223, 9021];
function getLoot(bags, searchBag) {
  let result = bags.find(function (bags) {
    return bags === searchBag;
  });
  return result;
}

console.log(getLoot(bags, 4504));
