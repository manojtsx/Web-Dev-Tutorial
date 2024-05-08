/*
Challenge : Simple Currency Converter

Write a function convertCurrency to convert from one currency to another using static exchange rates.

Requirements:
1. Write a function named convertCurrency that takes three parameters: amount, fromCurrency, and toCurrency.
2. Use a fixed object to store exchange rates relative to a base currency (e.g: USD)
3. The function should return the converted amount in the target currency.
4. Handle conversion through USD as a base, meaning if converting from GBP to EUR, first convert GBP to USD, then USD to EUR.

console.log(convertCurrency(100, "GBP","EUR"))
*/
const rates = {
    USD : 1,
    EUR : 0.9,
    GBP : 0.8,
    INR : 82
}
function convertCurrency(amount, fromCurrency, toCurrency){
    return amount * rates[toCurrency] / rates[fromCurrency];  
}
module.exports = convertCurrency;