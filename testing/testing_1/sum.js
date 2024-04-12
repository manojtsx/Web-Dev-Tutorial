function sum(a,b){
    return a + b;
}

function myFunction(input){
    if(typeof input !== "number"){
        throw new Error("String isnot valid.")
    }
}

module.exports = {sum,myFunction};