// find secound largest no :

let arr = [1, 25, 36, 5];

let f = arr[0];
let a = arr[0];
let b = arr[1];
if (a < b) {
  a = b;
  b = a;
}
for (let i = 2; i < arr.length; i++) {
  if (a < arr[i]) {
    let c = a;
    a = arr[i];
    if (b < c) {
      b = c;
    }
  } else if (a > arr[i] && b < arr[i]) {
    b = arr[i];
  } else if (a == b && b > arr[i]) b = arr[i];
}
console.log(b) 