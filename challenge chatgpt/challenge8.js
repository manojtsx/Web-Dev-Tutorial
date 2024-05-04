function filterEvenNumbers(numbers) {
    var evenNumbers = [];
    evenNumbers = numbers.filter(function (number) { return number % 2 === 0; });
    return evenNumbers;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers));
