var Doc = /** @class */ (function () {
    function Doc(content) {
        this.content = content;
    }
    Doc.prototype.print = function () {
        console.log(this.content);
    };
    return Doc;
}());
var Picture = /** @class */ (function () {
    function Picture(url) {
        this.url = url;
    }
    Picture.prototype.print = function () {
        console.log(this.url);
    };
    return Picture;
}());
var doc = new Doc("this is a document");
doc.print();
var picture = new Picture("https://example.com/picture.jpg");
picture.print();
