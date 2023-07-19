# Array.prototype.filter

## Description

The `filter()` method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

## Signature

### Parameters

- callbackFn: `(element, index, array) => {...}`
- thisArg: A value to use as this when executing `callbackFn` | (optional)

### Return

- A **shallow copy** of a portion of the given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. If no elements pass the test, an empty array will be returned.

```javascript
const numbers = [0, 2, 4, 8, 10, 12, 14, 16, 10, 20];

const isGreaterThanTen = numbers.filter((number) => {
  const isGreater = number > 10;
  return isGreater;
});

console.log(isGreaterThanTen); // [ 12, 14, 16, 10, 20 ]
```

## Docs source

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
