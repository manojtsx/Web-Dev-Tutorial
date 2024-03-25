function printStatusCode(code: string | number) {
    if(typeof code === "number"){
        console.log("Status code is given in number");
    }else if(typeof code === "string"){
        console.log("Status code is string");
    }else{
        console.log("Status code is invalid");
    }
}
printStatusCode(400);
printStatusCode("error");
printStatusCode(false);
