class Enumerable {
  // BEGIN (write your solution here)
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  orderBy(fn, direction = 'asc') {
    const compare = (a, b) => {
      if (fn(a) > fn(b)) {
        return direction === 'asc' ? 1 : -1;
      } if (fn(a) < fn(b)) {
        return direction === 'asc' ? -1 : 1;
      }
      return 0;
    };

    return this.build(coll => coll.sort(compare));
  }


  select(fn) {
    return this.build(coll => coll.map(fn));
  }

  where(fn) {
    return this.build(coll => coll.filter(fn));
  }

  toArray() {
    return this.operations.reduce((el, func) => func(el), this.collection);
  }
  // END
}

export default Enumerable;