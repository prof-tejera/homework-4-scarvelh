// Helper functions
// originally from
//https://stackoverflow.com/questions/650022/how-do-i-split-a-string-with-multiple-separators-in-javascript
export const splitMulti = (str, tokens) => {
  var tempChar = tokens[0]; // We can use the first token as a temporary join character
  for (var i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  str = str.split(tempChar);
  return str;
}
/**
 * Replace last occurrence of a string with another string
 * x - the initial string
 * y - string to replace
 * z - string that will replace
 *  Originally from
 *  https://stackoverflow.com/questions/2729666/javascript-replace-last-occurrence-of-text-in-a-string
 */
export const replaceLast =(x, y, z) =>{
  var a = x.split("");
  var length = y.length;
  if(x.lastIndexOf(y) !== -1) {
    for(var i = x.lastIndexOf(y); i < x.lastIndexOf(y) + length; i++) {
      if(i === x.lastIndexOf(y)) {
        a[i] = z;
      }
      else {
        delete a[i];
      }
    }
  }

  return a.join("");
}

