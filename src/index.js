class Sorter {
  constructor() {
    this.values = [];
  }

  add(element) {
    this.values.push(element);
  }

  at(index) {
    return this.values[index];
  }

  get length() {
    return this.values.length;
  }

  toArray() {
    return this.values
  }

  sort(indices) {
    indices.sort();
    let filtered = indices.map(index => {
      return this.values[index];
    });
    let sorted = filtered.sort(this.setComparator());
    indices.forEach((index, i) => {
      this.values.splice(index, 1, sorted[i]);
    });
  }

  setComparator(compareFunction = this.compareNumeric) {
    return compareFunction;
  }

  compareNumeric(a, b) {
    return (a !== b) ? ((a < b) ? -1 : 1) : 0;
  }

}
module.exports = Sorter;


// const AGE_COMPARATOR = (left, right) => left.age - right.age;
// const REVERSE_COMPARATOR = (left, right) => right - left;
// const STRINGIFY_COMPARATOR = (left, right) => JSON.stringify(left, null, 2).length - JSON.stringify(right, null, 2).length;
// let sorter = new Sorter();


// sorter.add({ age: 20 });
// sorter.add({ age: 18 });
// sorter.add({ age: 16 });

// sorter.setComparator(AGE_COMPARATOR);
// console.log('sorter.toArray: ', sorter.toArray());
// sorter.sort([0, 1]);


// console.log('sorter.toArray: ', sorter.toArray());
// console.log('typeof sorter.setComparator: ', typeof sorter.setComparator);
// sorter.setComparator();
// sorter.setComparator(AGE_COMPARATOR);
