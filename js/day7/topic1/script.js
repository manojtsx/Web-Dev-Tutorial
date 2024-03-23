console.log(document.getElementsByTagName('p'));
document.getElementsByTagName('p')[0].innerText = "This is a changed paragraph";
document.getElementsByTagName('p')[1].innerText = "This is a changed paragraph 2";


document.getElementById('rem').innerText = "This is a changed heading";
function run(){
    document.getElementById('rem').innerText = "Button Clicked";
    
}
document.querySelector('#id_name').innerText = "This is a changed paragraph";

document.write("Hello World");


// make an index.html file which contain 5 paragraph tag which is empty. Change the text of the paragraph tag using Javscript.