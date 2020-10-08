const split = (str, delim) => {
  // write code for strings.split
  let newString = str.split(delim);
  return newString;
};

const pairs = (str) => {
  // write code for strings.pairs
  let arr = str.match(/.{1,2}/g);
  return arr;
};

const reverse = (str) => {
  // write code for strings.reverse
  let wordSplitter = str.split("");
  let wordReverse = wordSplitter.reverse("");
  let newWord = wordReverse.join("");
  return newWord;
};

module.exports = {
  split,
  pairs,
  reverse,
};
