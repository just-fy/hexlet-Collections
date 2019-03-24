// BEGIN (write your solution here)
export default (coll) => {
  const iter = (items, acc) => {
    if (items.length === 0) {
      return acc;
    }
    const [{ year }, ...rest] = items;
    const yearCounter = acc[year] ? acc[year] += 1 : 1;
    return iter(rest, { ...acc, [year]: yearCounter });
  };
  return iter(coll, {});
};
// END
