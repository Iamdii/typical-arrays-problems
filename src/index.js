
exports.min = function min (array) {
  if(array === undefined || array.length == 0) return 0;

  var result = array[0];

  for(var i = 1; i < array.length; i++){
    if(array[i] < result) {
      result = array[i];
    }
  }

  return result;
}

exports.max = function max (array) {
  if(array === undefined || array.length == 0) return 0;

  var result = array[0];

  for(var i = 1; i < array.length; i++){
    if(array[i] > result) {
      result = array[i];
    }
  }

  return result;
}

exports.avg = function avg (array) {
  if(array === undefined || array.length == 0) return 0;

  var result = array[0];

  for(var i = 1; i < array.length; i++){
    result += array[i];
  }

  return result/array.length;
}
