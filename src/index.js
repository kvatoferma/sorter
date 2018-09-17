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
    let filtered = indices.map(index => {
      return this.values[index];
    });
//  console.log('filtered: ', filtered);
    let sorted = filtered.sort();
// console.log('sorted: ', sorted);
    indices.forEach((index, i) => {
      this.values.splice(index, 1, sorted[i]);
    });
// console.log('returned: ', sorter.toArray());
  }

  setComparator(compareFunction = this.defaultComparator) {
    return compareFunction;
  }

  defaultComparator(a, b) {
    return (a !== b) ? ((a < b) ? -1 : 1) : 0;
  }

}
//
// let sorter = new Sorter();
// sorter.add(4);
// sorter.add(3);
// sorter.add(2);
// sorter.add(1);
// console.log('toArray: ', sorter.toArray());
// let indices = [1,2];
// console.log('indices: ', indices);
// sorter.sort(indices);



module.exports = Sorter;
