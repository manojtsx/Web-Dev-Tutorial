/*
 Challenge : Check Object Emptiness

 Write a function isEmptyObject that takes an object as input and determines whether it is empty or not. An empty object is defined as an object with no own properties.

 Your task is to implement the isEmptyObject using JavaScritp and return a message indicating whether the object is empty or not.

 CONSTRAINTS:
 1. The input object may have any number of properties, including zero.
 2. The function should return a message indicating whether the object is empty or not.
 3. You should use the provided isEmptyObject function signature without any additional parameters.

 console.log(isEmptyObject({name : "Manoj"})) OUTPUT: it's not empty
 console.log(isEmptyObject({})) OUTPUT: it's empty
 console.log(isEmptyObject({keyWithNull : null})) OUTPUT: it's empty
 console.log(isEmptyObject({keyWithUndefined : undefined})) OUTPUT: it's empty
*/
function isEmptyObject(obj){
    for(let key in obj){
        if(obj[key] !== null && obj[key] !== undefined){
            return "it's not empty"
        }
    }
    return "it's empty";
}
module.exports = isEmptyObject;