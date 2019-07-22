let clone = (function() {

    function isObject(data) {
      return typeof data === 'object';
    }
  
    function isArray(data) {
      return Object.prototype.toString.call(data) === '[object Array]';
    }
  
    function clone(data) {
      var copied;
  
      if(!isObject(data) || data === null) {
        copied = data;
        return copied;
      }
  
      if(isArray(data)) {
        copied = [];
  
        for(var i = 0; i < data.length; i++) {
          copied[i] = clone(data[i]);
        }
  
        return copied;
      }
  
      return copied;
    }
  
    return clone;
  
  }());