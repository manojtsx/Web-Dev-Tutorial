interface Printable{
    print():void;
}
class Doc implements Printable{
    content:string;
    constructor(content:string){
        this.content = content;
    }
    print() :void {
        console.log(this.content);
    }
}

class Picture implements Printable{
    url : string;
    constructor(url:string){
        this.url = url;
    }
    print() :void{
        console.log(this.url);
    }
}

var doc : Doc= new Doc("this is a document");
doc.print();

var picture : Picture = new Picture("https://example.com/picture.jpg");
picture.print();