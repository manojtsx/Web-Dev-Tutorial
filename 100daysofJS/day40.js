/*
Challenge : Simple Bar Chart Using Array Data

Write a function generateBarChart that takes an array of  numbers and generates a text-based bar chart.

console.log(generateBarChart([5,3,9,2]));

1 : *****
2 : ***
3 : *********
4 : **
*/
function generateBarChart(arr){
    const newArr = arr.map((currElem, index)=>{
        var barChart = "";
        let number = 0;

        while(number < currElem){
            barChart+="*";
            number++;
        }
        return `${index + 1} : ${barChart}`
    });
    return newArr.join("\n");
}
console.log(generateBarChart([5,3,9,2]));

module.exports = generateBarChart;