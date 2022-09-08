function xepelin(num) {
  if (num % 5 === 0 && num % 3 === 0) {
    return "Xepelin";
  } else if (num % 3 === 0) {
    return "Xepe";
  } else if (num % 5 === 0) {
    return "Lin";
  }
}

function findAndMultiply(arr) {
  const target = 2022;
  let multiply;

  while (arr.length) {
    const selected = arr.shift();
    const toSearch = target - selected;
    const exists = arr.find((number) => number === toSearch);

    if (exists) {
      multiply = selected * toSearch;
      break;
    }
  }

  return multiply;
}

module.exports = { xepelin, findAndMultiply };
