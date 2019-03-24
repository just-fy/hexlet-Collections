// BEGIN (write your solution here)
export default (coll, fn) => coll.reduce((acc, item) => ({ ...acc, [fn(item)]: item }), {});
// END
