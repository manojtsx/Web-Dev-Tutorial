let Name : string = "";
let Language : string = "";
function setName(name : string, age ?: number, language : string = "nepali"){
    Name = name;
    Language = language;
}
function getName() : string{
    return Name;
}
function getLanguage() :string{
    return Language;
}

// Here age is optional parameter
setName("manoj",24,"english");
console.log(getName());
console.log(getLanguage())