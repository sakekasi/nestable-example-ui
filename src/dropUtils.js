var nextKey = 0;
var store = {};

export function addData(data) {
  let newKey = nextKey++;
  store[newKey] = data;
  return newKey;
}

export function getData(key) {
  return store[key];
}
