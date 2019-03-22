class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.build(coll => coll.map(fn));
  }

  orderBy(fn, direction = 'asc') {
    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      const compareResult = direction === 'asc' ? 1 : -1;

      if (a1 > b1) {
        return compareResult;
      }

      if (a1 < b1) {
        return -compareResult;
      }

      return 0;
    };
    return this.build(coll => coll.sort(comparator));
  }

  where(fn) {
    return this.build(coll => coll.filter(fn));
  }

  // BEGIN (write your solution here)
  get length() {
    return this.toArray().length;
  }

  getProcessedCollection() {
    if (!this.memo) {
      this.memo = this.operations.reduce((el, func) => func(el), this.collection);
    }
    return this.memo;
  }

  toArray() {
    return this.getProcessedCollection().slice();
  }
  // END
}

export default Enumerable;