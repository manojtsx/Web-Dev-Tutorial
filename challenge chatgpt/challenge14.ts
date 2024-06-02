class LinearSearch<T> {
  arr: T[];
  constructor(arr: T[]) {
    this.arr = arr;
  }
  linearSearch(key : T): void | number {
    let i: number;
    let found: boolean = false;
    for (i = 0; i <= this.arr.length; i++) {
      if (key === this.arr[i]) {
        console.log("The index of the key is: ", i);
        found = true;
        break;
      }
    }
    if (!found) {
      console.log("Couldnot find the key in the array");
    }
  }
}

let l = new LinearSearch<number>([1,2,3,4,5,6]);
l.linearSearch(7); // Couldnot find the key in the array
l.linearSearch(2); // The index of the key is: 1

