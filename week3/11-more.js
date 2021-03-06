
'use strict';
const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;
if (x === y) {
  console.log('When using strict equality \'[' + x + ']\'' + ' equals ' + '\'[' + y + ']\'.');
} else {
console.log('When using strict equality \'[' + x + '\'] and ' + '\'[' + y + ']\' are not equals.');
}

if (z == y) {
  console.log('When using loose equality \'[' + y + ']\'' + ' and ' + '\'[' + z + ']\'' + ' are equals.');
} else {
  console.log('When using loose equality \'[' + y + '\'] and ' + '\'[' + z + ']\' are not equals.');
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

compareArrays(x, y);
compareArrays(y, z);
compareArrays(x, z);
