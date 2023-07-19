# Array.prototype.reduce

## Description

The `reduce()` method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

## Signature

### Parameters

- callbackFn: `(accumulator, element, index, array) => {...}`
- initialValue: A value to which accumulator is initialized the first time the callback is called. If initialValue is not specified, accumulator is initialized to the first value in the array | (optional)
- thisArg: A value to use as this when executing `callbackFn` | (optional)

### Return

- The value that results from running the "reducer" callback function to completion over the entire array.

```javascript
const numbers = [0, 2, 4, 8, 10, 12, 14, 16, 10, 20];

const getTotal = numbers.reduce((acc, number) => {
  const currentTotal = acc + number;
  return currentTotal;
}, 0);

console.log(getTotal); // 96
```

## Docs source

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
