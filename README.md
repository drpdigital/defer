defer
=====

simple inline code deferral, 128 bytes (gzipped)

### Usage
```html
<html>
    <head>
        <script>(function(e){var b=[],c,d=function(a){if(c)return a();b.push(a)};d.resolve=function(){for(var a;a=b.shift();)a();c=!0};e.defer=d})(window);</script>
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
(function(window) {

    var _queue = [],
        _resolved;

    var defer = function(fn) {
        if(_resolved) {
            return fn();
        }
        _queue.push(fn);
    };

    defer.resolve = function() {

        var f;
        while (f = _queue.shift()) {
            f();
        }

        _resolved = true;
    };

    window.defer = defer;

})(window);
```

#### Minified
```javascript
(function(e){var b=[],c,d=function(a){if(c)return a();b.push(a)};d.resolve=function(){for(var a;a=b.shift();)a();c=!0};e.defer=d})(window);
```
