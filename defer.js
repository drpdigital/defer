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