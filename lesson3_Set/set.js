// BEGIN (write your solution here)
const difference = (set1, set2) => {
  const result = new Set();
  const combinedUniqArray = Array.from(new Set([...set1, ...set2]));
  return combinedUniqArray.reduce((acc, value) => !set2.has(value) ? acc.add(value) : acc, result);
};
export default difference;
// END

// BEGIN (teacher's solution)
export default (set1, set2) =>
  new Set(Array.from(set1).filter(value => !set2.has(value)));
// END