// Scope Variable
// let and var

//Global scope
name = "Ram"; // Variable declare outside the block or container are automatically global

// Class 1
{
    // Local Scope
    let name = "Dalle";
    console.log(name); // Ram
}

//Class 2
{
    // Global scope 
    var name = "Fucche"; // changing the value of a
    console.log(name);  //Fuchhe
}
console.log(name); //Ram