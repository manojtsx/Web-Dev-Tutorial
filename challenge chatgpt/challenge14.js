var LinearSearch = /** @class */ (function () {
    function LinearSearch(arr) {
        this.arr = arr;
    }
    LinearSearch.prototype.linearSearch = function (key) {
        var i;
        var found = false;
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
    };
    return LinearSearch;
}());
var l = new LinearSearch([1, 2, 3, 4, 5, 6]);
l.linearSearch(7);
