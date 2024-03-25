let Name : string = "";
function setName(name : string){
    Name = name;
}
function getName() : string{
    return Name;
}

setName("manoj");
console.log(getName());