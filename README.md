# array-compact-map

[![npm version](https://badge.fury.io/js/array-compact-map.svg)](https://badge.fury.io/js/array-compact-map)
[![npm downloads](https://badgen.net/npm/dt/array-compact-map)](https://badgen.net/npm/dt/array-compact-map)

array-compact-map JS/TS library that expose a transformation function (eq. to Array.map) 
The returns array containing non-undefined results of calling the given transformation with each element of this array.

Use this method to receive an array of non-undefined values when your transformation produces an optional value.

## Installation
`npm i array-compact-map`

## Usage

```typescript
import "array-compact-map"; // you must import the framework on your startup file

const strings: string[] = ["10", "500", "hello", "1000", "world"];
const res: number[] = strings.compactMap((str) => {
    const n = Number.parseInt(str);
    if(!isNaN(n)) {
        return n;
    }
});
console.log(res); // [ 10, 500, 1000 ]
```
