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
