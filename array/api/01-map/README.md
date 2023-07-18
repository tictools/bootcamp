# Array.prototype.map

## Description

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

## Signature

### Parameters

- callbackFn: `(element, index, array) => {//...}`
- thisArg: A value to use as this when executing `callbackFn` | (optional)

### Return

- A **new array** with each element being the result of the callback function.

```javascript
const numbers = [1, 2, 3];

const numbersPerIndexAndLength = numbers.map((number, index, numbers) => {
  const numberPerIndexAndLength = number * index * numbers.length;
  return numberPerIndexAndLength;
});

console.log(numbersPerIndexAndLength); // [ 0, 6, 18 ]
```

## Docs source

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
