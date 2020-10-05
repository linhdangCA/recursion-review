// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var resultStr = '';

  var stringify = function(item) {
    if (typeof item === 'number') {
      resultStr += item.toString();
    }
    if (typeof item === 'boolean') {
      resultStr += item.toString();
    }
    if (typeof item === 'string') {
      resultStr += `"${item}"`;
    }
    if (item === null) {
      resultStr += 'null';
    }
    if (Array.isArray(item)) {
      resultStr += '[';
      for (var i = 0; i < item.length; i++) {
        stringify(item[i]);
        if (i !== item.length - 1) {
          resultStr += ',';
        }
      }
      resultStr += ']';
    }
    if ((!Array.isArray(item)) && (typeof item === 'object') && (item !== null)) {
      resultStr += '{';
      var keys = Object.keys(item);
      for (var j = 0; j < keys.length; j++) {
        if (typeof item[keys[j]] === 'function' || keys[j] === 'undefined') {
          continue;
        }
        resultStr += `"${keys[j]}"`;
        resultStr += ':';
        stringify(item[keys[j]]);
        if (j !== keys.length - 1) {
          resultStr += ',';
        }
      }
      resultStr += '}';
    }
  };

  stringify(obj);
  return resultStr;
};