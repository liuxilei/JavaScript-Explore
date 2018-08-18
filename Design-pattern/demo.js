var baz;
(function() {
    var foo = 10;
    var bar = 2;
    baz = function() {
        return foo * bar;
    };
})();
console.dir(baz);