// Binary Search
// Assume the array to be sorted.
class BinarySearch<T> {
  arr: T[] = [];
  left: number;
  right: number;
  constructor(arr: T[]) {
    this.arr = arr;
    this.left = 0;
    this.right = this.arr.length - 1;
  }

  binarySearch(key: T): void {
    while (this.left <= this.right) {
      let mid: number = Math.floor((this.left + this.right) / 2);

      if (key > this.arr[mid]) {
        this.left = mid + 1;
      } else if (key < this.arr[mid]) {
        this.right = mid - 1;
      } else if (key == this.arr[mid]) {
        console.log("Found key at index : ", mid);
        return;
      }
    }
    console.log("Not found");
  }
}

var b = new BinarySearch([1, 2, 3, 4, 5, 6, 7, 10, 12, 15, 18, 20, 21]);
b.binarySearch(12);
