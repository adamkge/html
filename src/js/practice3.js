function Parent(id, name) {
    this.id = id;
    this.name = name;
}
Parent.prototype.tag = 'parent';
function Child(id, name) {
    Child.prototype = new Parent(12, 'wololoooo');
}

function doShit() {
    var bela = new Child();
    //document.write("hi");
    document.write(bela.id);
}
doShit();


var obj = (function() {
    var age = 0;
    return {
        get age() {
            return age;
        },
        set age(age) {
            age = age;
        }
    };
})();
