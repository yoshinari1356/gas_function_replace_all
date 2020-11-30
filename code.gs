function REPLACE_ALL(targetStr, dictValueRangs) {
  var dict = {};
  for each(var val in dictValueRangs){
    dict[val[0]] = val[1];
  }
  return keys2values(targetStr, dict)
}
function keys2values(str, dict){
  var log_str = str
  Object.keys(dict).forEach(function(key){
    str = str.replace(String(key), String(this[key]));
  }, dict);
  return str;
}
