# @tsonic/js-globals

Global type definitions for Tsonic in **JS mode** (JavaScript semantics).

## Purpose

This package provides JavaScript built-in types and methods for TypeScript when `noLib: true` is set, enabling JavaScript-style programming in Tsonic code while compiling to C# with `Tsonic.JSRuntime`.

**Key principle:** In JS mode, JavaScript array/string methods ARE available and compile to `Tsonic.JSRuntime` extension methods.

## Usage

Install this package in your Tsonic project:

```bash
npm install @tsonic/js-globals
```

Add to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "noLib": true,
    "types": ["@tsonic/js-globals"]
  }
}
```

Set your `tsonic.json` mode:

```json
{
  "mode": "js"
}
```

## What This Provides

### Full JavaScript API

- `Array<T>` - **WITH** all JS methods: `.length`, `.map()`, `.filter()`, `.reduce()`, etc.
- `String` - **WITH** all JS methods: `.slice()`, `.includes()`, `.split()`, etc.
- `Number`, `Boolean`, `Object`, `Function` - full JavaScript definitions
- `Math` - all math functions
- `JSON` - `parse()` and `stringify()`
- `console` - `log()`, `error()`, `warn()`, etc.
- `Promise<T>` - for async/await support
- `RegExp` - regular expressions
- Iterator types - for `for-of` loops

### What's NOT Included

- **No DOM types** - no `Document`, `HTMLElement`, `window`, etc.
- **No Node.js types** - no `Buffer`, `process`, `require`, etc.
- **No Browser APIs** - no `fetch`, `localStorage`, `XMLHttpRequest`, etc.

This is intentional - Tsonic compiles to native executables, not browser/Node.js environments.

## Example

```typescript
// Array methods work just like JavaScript
const numbers = [1, 2, 3, 4, 5];

// ✅ All JavaScript array methods available
console.log(numbers.length); // 5
const doubled = numbers.map(x => x * 2); // [2, 4, 6, 8, 10]
const evens = numbers.filter(x => x % 2 === 0); // [2, 4]
const sum = numbers.reduce((a, b) => a + b, 0); // 15

// ✅ String methods work
const message = "Hello, Tsonic!";
console.log(message.length); // 14
console.log(message.slice(0, 5)); // "Hello"
console.log(message.includes("Tsonic")); // true

// ✅ Math functions
const result = Math.round(3.7); // 4
const random = Math.random(); // 0.0 to 1.0

// ✅ JSON operations
const obj = { name: "Alice", age: 30 };
const json = JSON.stringify(obj); // '{"name":"Alice","age":30}'
const parsed = JSON.parse(json); // { name: "Alice", age: 30 }
```

## How It Works

When you use JS mode:

1. **TypeScript sees** JavaScript APIs (via this package)
2. **Tsonic compiler emits** calls to `Tsonic.JSRuntime` extension methods
3. **C# code uses** `Tsonic.JSRuntime` package for JS semantics
4. **Result:** JavaScript behavior in a native executable

Example compilation:

```typescript
// TypeScript (JS mode)
const nums = [1, 2, 3];
const doubled = nums.map(x => x * 2);
```

```csharp
// Generated C# (uses Tsonic.JSRuntime)
using Tsonic.JSRuntime;

var nums = new List<int> { 1, 2, 3 };
var doubled = nums.JSMap(x => x * 2);
```

## Mode Switching

To switch to .NET semantics (without `.length`, `.map()`, etc.), use `@tsonic/dotnet-globals` instead:

1. Uninstall this package: `npm uninstall @tsonic/js-globals`
2. Install dotnet globals: `npm install @tsonic/dotnet-globals`
3. Update `tsconfig.json`: `"types": ["@tsonic/dotnet-globals"]`
4. Update `tsonic.json`: `"mode": "dotnet"` (or omit, dotnet is default)

## License

MIT
