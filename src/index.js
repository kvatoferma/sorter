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
    // let sortedValues = indices.map((index) => {
    //   return this.values[index];
    // }).sort();
    // this.values.forEach((value, i) => {
    //   return indices.forEach((index) => {
    //     if (index === i) {
    //       return this.values[i] = sortedValues[index];
    //     }
    //   });
    // });
    // return sortedValues;


    // let cut = indices.map((index) => {
    //   return this.values.filter((value, n) => {
    //     console.log('n: ', n, ' index: ', index);
    //     console.log('this.values: ', this.values);
    //     return (n === index);
    //   });
    // });

    let cut = indices.map((index) => {
      return parseInt(this.values.filter((value, n) => {
        return (index === n);
      }));
    }).sort();

    


    // let cut = [];
    // for (var index = 0; index < indices.length; index++) {
    //   for (var n = 0; n < this.values.length; n++) {
    //     if (index === n) {
    //       cut.push(this.values[index]);
    //     }
    //   }
    // }

    console.log('cut: ', cut);
//  1) имеем массив this.values
//  2)


  }

  setComparator(compareFunction) {
    // your implementation
  }
}
//
let sorter = new Sorter();
sorter.add(7);
sorter.add(6);
sorter.add(5);
sorter.sort([1,2]);
console.log('toArray: ', sorter.toArray());




// module.exports = Sorter;
