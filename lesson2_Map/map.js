// BEGIN (write your solution here)
const countRepeats = (listWords, listStopWords) => {
  const lowerWords = listWords.map(value => value.toLowerCase());
  const lowerStopWords = listStopWords.map(value => value.toLowerCase());
  const filtered = lowerWords.filter(value => !lowerStopWords.includes(value));
  const map = new Map();
  const newMap = filtered.reduce((acc, key) => {
    if (!acc.has(key)) {
      return acc.set(key, 1);
    }
    return acc.set(key, acc.get(key) + 1);
  }, map);
  return newMap;
};
export default countRepeats;
// END
