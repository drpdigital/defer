defer
=====

simple inline code deferral, 118 bytes (gzipped)

### Usage
```html
<html>
    <head>
        <script>var defer=function(){var b=[],c=function(a){return b.push(a)};c.resolve=function(){for(var a=0;a<b.length;a++)b[a]()};return c}();</script>
    </head>
    <body>
        <!-- assorted markup -->
        <script>
            defer(function() {
                console.log('I am executed later when the dom has loaded');
            });
        </script>
        <!-- more markup -->
        <script>
            defer.resolve();
        </script>
    </body>
</html>
```

### Code

#### Original
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

#### Minified
```javascript
var defer=function(){var b=[],c=function(a){return b.push(a)};c.resolve=function(){for(var a=0;a<b.length;a++)b[a]()};return c}();
```
