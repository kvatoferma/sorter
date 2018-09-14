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


/*
    let cut = indices.map((index) => {
      return parseInt(this.values.filter((value, n) => {
        return (index === n);
      }));
    });
    let sorted = cut.sort();



    this.values.map((value, n) => {
      if (n === sorted[indices]) {}
      return
    });
*/

// this.values = [4,3,2,1]
// indices = [1,2]

let filtered = indices.map((index) => {
    return parseInt(this.values.filter((value, n) => {
      return (index === n);
  }));
});
console.log('filtered: ', filtered); // [3,2]
let sorted = filtered.sort();
console.log('sorted: ', sorted); // [2,3]
let injected = this.values.map((value, n) => {
  return sorted.filter((element, i) => {
    return (n === indices[n]);
  });
});







// 1) Имеется массив this.values = [7,6,5];
// 2) Есть массив индексов indices = [1,2];
// 3) Получаем массив чисел, которые необходимо отсортировать cut = [6,5];
// 4) Сортируем выбранный массив sorted = [5,6];
// 5) sorted[indices]
//
//


    // let cut = indices.map((index) => {
    //   return parseInt(this.values.map((value, n) => {
    //     return (index === n) ? ;
    //   }));
    // }).sort();
    //
    // this.values.map((value, n) => {
    //   return indices
    // });
//
//
//
//
//


//    this.values.map((value, n) => {
//      return indices.forEach((index) => {
//        return ()
//      });
//    });

    // let sorted = [];
    // for (var n = 0; n < this.values.length; n++) {
    //    for (var index = 0; index < indices.length; index++) {
    //     if (n === indices[n]) {
    //       sorted.push(cut[n]);
    //       console.log('if n === indices[n] ', cut[n]);
    //     } else {
    //       sorted.push(this.values[n]);
    //       console.log('if n !== indices[n] ', this.values[n]);
    //     }
    //   }
    // }


    // values = [7,6,5]
    // indices = [1,2]
    // cut = [5,6]
    // sorted = [7,5,6]





    // let cut = [];
    // for (var index = 0; index < indices.length; index++) {
    //   for (var n = 0; n < this.values.length; n++) {
    //     if (index === n) {
    //       cut.push(this.values[index]);
    //     }
    //   }
    // }

    // console.log('cut: ', cut);
    // console.log('sorted: ', sorted);

//  1) имеем массив this.values
//  2)


  }

  setComparator(compareFunction) {
    // your implementation
  }
}
//
let sorter = new Sorter();
sorter.add(4);
sorter.add(3);
sorter.add(2);
sorter.add(1);
console.log('toArray: ', sorter.toArray());
let indices = [1,2];
console.log('indices: ', indices);
sorter.sort(indices);
console.log('injected: ', injected);



// module.exports = Sorter;
