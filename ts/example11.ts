let Name : string = "";
function setName(name : string, age ?: number){
    Name = name;
}
function getName() : string{
    return Name;
}

// Here age is optional parameter
setName("manoj");
console.log(getName());