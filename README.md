defer
=====

simple inline code deferral

```javascript
var defer = (function(){

    var _queue = [];

    var exports = function(fn) {
        return _queue.push(fn);
    };

    exports.resolve = function() {
        for( var i = 0; i < _queue.length; i++ ) {
            _queue[i]();
        }
    };

    return exports;

})();
```

```javascript
var defer=function(){var b=[],c=function(a){return b.push(a)};c.resolve=function(){for(var a=0;a<b.length;a++)b[a]()};return c}();
```
