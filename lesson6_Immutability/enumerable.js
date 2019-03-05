class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    // BEGIN (write your solution here)
    const coll2 = this.collection.map(fn);
    return new Enumerable(coll2);
    // END
  }

  orderBy(fn, direction = 'asc') {
    // BEGIN (write your solution here)
    const compare = (a, b) => {
      if (fn(a) > fn(b)) {
        return direction === 'asc' ? 1 : -1;
      } if (fn(a) < fn(b)) {
        return direction === 'asc' ? -1 : 1;
      }
      return 0;
    };
    const coll3 = this.collection.slice().sort(compare);
    return new Enumerable(coll3);
    // END
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;