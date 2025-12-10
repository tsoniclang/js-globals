# @tsonic/js-globals

JavaScript-specific global type definitions for Tsonic JS mode.

This package extends the base types from `@tsonic/globals` with full JavaScript APIs.

## Usage

Install alongside `@tsonic/globals`:

```bash
npm install @tsonic/globals @tsonic/js-globals
```

Add to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "noLib": true,
    "typeRoots": [
      "node_modules/@tsonic/globals",
      "node_modules/@tsonic/js-globals"
    ]
  }
}
```

## What This Provides

### Array with full JavaScript API
- `.length`, `.push()`, `.pop()`, `.shift()`, `.unshift()`
- `.map()`, `.filter()`, `.reduce()`, `.find()`, `.findIndex()`
- `.forEach()`, `.every()`, `.some()`, `.includes()`
- `.slice()`, `.splice()`, `.concat()`, `.join()`
- `.sort()`, `.reverse()`, `.indexOf()`, `.lastIndexOf()`
- `.at()`, `.flat()`, `.flatMap()`

### String with full JavaScript API
- `.length`, `.charAt()`, `.charCodeAt()`
- `.indexOf()`, `.lastIndexOf()`, `.includes()`
- `.startsWith()`, `.endsWith()`
- `.slice()`, `.substring()`, `.substr()`
- `.toLowerCase()`, `.toUpperCase()`, `.trim()`
- `.padStart()`, `.padEnd()`, `.repeat()`
- `.replace()`, `.split()`, `.match()`, `.search()`

### Other JavaScript globals
- `Number` with methods and static properties
- `Boolean`, `Object`, `Function` with full APIs
- `RegExp` with `exec()`, `test()`, etc.
- `Math` - all math functions
- `JSON` - `parse()` and `stringify()`
- `console` - `log()`, `error()`, `warn()`, etc.
- `Error` - error types
- `Map<K,V>`, `Set<T>` - collections
- `setTimeout`, `setInterval` - timers

## Example

```typescript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);           // 5
const doubled = numbers.map(x => x * 2); // [2, 4, 6, 8, 10]

const message = "Hello, Tsonic!";
console.log(message.slice(0, 5));      // "Hello"
console.log(message.includes("Tsonic")); // true

const result = Math.round(3.7);        // 4
const json = JSON.stringify({ x: 1 }); // '{"x":1}'
```

## How It Works

1. `@tsonic/globals` provides base types (minimal Array, String, etc.)
2. This package extends them with JavaScript methods via interface merging
3. Tsonic compiler emits calls to `Tsonic.JSRuntime` extension methods
4. Result: JavaScript behavior in a native executable

## License

MIT
