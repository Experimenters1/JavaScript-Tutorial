# JavaScript-Tutorial
## Object
```javascript
let tong = {};

const object1 = { a: 1, b: 1 };
const object2 = { c: 1, d: 1 };

// Hàm append
function appendToTong(target, source) {
  Object.assign(target, source);
}

// Append object1 vào tong
appendToTong(tong, object1);
console.log(tong); // { a: 1, b: 1 }

// Append object2 vào tong
appendToTong(tong, object2);
console.log(tong); // { a: 1, b: 1, c: 1, d: 1 }

```
