/**
 * @tsonic/js-globals
 *
 * JavaScript-specific global type definitions for Tsonic JS mode.
 *
 * This package extends the base types from @tsonic/globals with full
 * JavaScript APIs. Use alongside @tsonic/globals in typeRoots.
 *
 * Key principle: Array<T> HAS JS members like .length and .map
 * This enables JS-style programming while compiling to C# with Tsonic.JSRuntime
 *
 * Index-space values (length, indexOf, etc.) use `int` type alias from
 * @tsonic/types to enable numeric proof validation for array indexing.
 */

import { int } from "@tsonic/types";

declare global {
  /**
   * Array type - extends base with full JavaScript API
   * These compile to Tsonic.JSRuntime extension methods
   */
  interface Array<T> {
    /**
     * Gets or sets the length of the array.
     */
    length: int;

    /**
     * Appends new elements to the end of an array, and returns the new length.
     */
    push(...items: T[]): int;

    /**
     * Removes the last element from an array and returns it.
     */
    pop(): T | undefined;

    /**
     * Removes the first element from an array and returns it.
     */
    shift(): T | undefined;

    /**
     * Inserts new elements at the start of an array, and returns the new length.
     */
    unshift(...items: T[]): int;

    /**
     * Returns a copy of a section of an array.
     */
    slice(start?: int, end?: int): T[];

    /**
     * Removes elements from an array and, if necessary, inserts new elements, returning deleted elements.
     */
    splice(start: int, deleteCount?: int, ...items: T[]): T[];

    /**
     * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
     */
    indexOf(searchElement: T, fromIndex?: int): int;

    /**
     * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
     */
    lastIndexOf(searchElement: T, fromIndex?: int): int;

    /**
     * Determines whether all the members of an array satisfy the specified test.
     */
    every(predicate: (value: T, index: int, array: T[]) => unknown): boolean;

    /**
     * Determines whether the specified callback function returns true for any element of an array.
     */
    some(predicate: (value: T, index: int, array: T[]) => unknown): boolean;

    /**
     * Performs the specified action for each element in an array.
     */
    forEach(callbackfn: (value: T, index: int, array: T[]) => void): void;

    /**
     * Calls a defined callback function on each element of an array, and returns an array of the results.
     */
    map<U>(callbackfn: (value: T, index: int, array: T[]) => U): U[];

    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     */
    filter(predicate: (value: T, index: int, array: T[]) => unknown): T[];

    /**
     * Calls the specified callback function for all the elements in an array. The return value is the accumulated result.
     */
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: int, array: T[]) => U, initialValue: U): U;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
     */
    find(predicate: (value: T, index: int, array: T[]) => unknown): T | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
     */
    findIndex(predicate: (value: T, index: int, array: T[]) => unknown): int;

    /**
     * Determines whether an array includes a certain element.
     */
    includes(searchElement: T, fromIndex?: int): boolean;

    /**
     * Sorts an array in place.
     */
    sort(compareFn?: (a: T, b: T) => number): this;

    /**
     * Reverses the elements in an array in place.
     */
    reverse(): T[];

    /**
     * Combines two or more arrays.
     */
    concat(...items: (T | T[])[]): T[];

    /**
     * Adds all the elements of an array into a string, separated by the specified separator string.
     */
    join(separator?: string): string;

    /**
     * Returns the value of the element at the specified index, or undefined if the index is out of bounds.
     */
    at(index: int): T | undefined;

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
     */
    flat<D extends int = 1>(depth?: D): any[];

    /**
     * Calls a defined callback function on each element of an array, and then flattens the result by one level.
     */
    flatMap<U>(callback: (value: T, index: int, array: T[]) => U | U[]): U[];
  }

  interface ReadonlyArray<T> {
    readonly length: int;
    slice(start?: int, end?: int): T[];
    indexOf(searchElement: T, fromIndex?: int): int;
    lastIndexOf(searchElement: T, fromIndex?: int): int;
    every(predicate: (value: T, index: int, array: readonly T[]) => unknown): boolean;
    some(predicate: (value: T, index: int, array: readonly T[]) => unknown): boolean;
    forEach(callbackfn: (value: T, index: int, array: readonly T[]) => void): void;
    map<U>(callbackfn: (value: T, index: int, array: readonly T[]) => U): U[];
    filter(predicate: (value: T, index: int, array: readonly T[]) => unknown): T[];
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: int, array: readonly T[]) => U, initialValue: U): U;
    find(predicate: (value: T, index: int, array: readonly T[]) => unknown): T | undefined;
    findIndex(predicate: (value: T, index: int, array: readonly T[]) => unknown): int;
    includes(searchElement: T, fromIndex?: int): boolean;
    concat(...items: (T | readonly T[])[]): T[];
    join(separator?: string): string;
    at(index: int): T | undefined;
  }

  interface ArrayConstructor {
    new <T>(...items: T[]): T[];
    isArray(arg: any): arg is any[];
    from<T>(arrayLike: ArrayLike<T>): T[];
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: int) => U): U[];
    of<T>(...items: T[]): T[];
  }

  const Array: ArrayConstructor;

  /**
   * String type - extends base with full JavaScript API
   */
  interface String {
    /**
     * Returns the length of a String object.
     */
    readonly length: int;

    /**
     * Returns the character at the specified index.
     */
    charAt(pos: int): string;

    /**
     * Returns the Unicode value of the character at the specified location.
     */
    charCodeAt(index: int): int;

    /**
     * Returns a string that contains the concatenation of two or more strings.
     */
    concat(...strings: string[]): string;

    /**
     * Returns the position of the first occurrence of a substring.
     */
    indexOf(searchString: string, position?: int): int;

    /**
     * Returns the last occurrence of a substring in the string.
     */
    lastIndexOf(searchString: string, position?: int): int;

    /**
     * Determines whether a string contains another string.
     */
    includes(searchString: string, position?: int): boolean;

    /**
     * Determines whether a string begins with the characters of a specified string.
     */
    startsWith(searchString: string, position?: int): boolean;

    /**
     * Determines whether a string ends with the characters of a specified string.
     */
    endsWith(searchString: string, endPosition?: int): boolean;

    /**
     * Returns a copy of this string starting at the specified index.
     */
    slice(start?: int, end?: int): string;

    /**
     * Returns a section of a string.
     */
    substring(start: int, end?: int): string;

    /**
     * Gets a substring beginning at the specified location and having the specified length.
     */
    substr(from: int, length?: int): string;

    /**
     * Converts all the alphabetic characters in a string to lowercase.
     */
    toLowerCase(): string;

    /**
     * Converts all the alphabetic characters in a string to uppercase.
     */
    toUpperCase(): string;

    /**
     * Removes the leading and trailing white space and line terminator characters from a string.
     */
    trim(): string;

    /**
     * Removes the trailing white space and line terminator characters from a string.
     */
    trimEnd(): string;

    /**
     * Removes the leading white space and line terminator characters from a string.
     */
    trimStart(): string;

    /**
     * Pads the current string with a given string to a given length from the start.
     */
    padStart(targetLength: int, padString?: string): string;

    /**
     * Pads the current string with a given string to a given length from the end.
     */
    padEnd(targetLength: int, padString?: string): string;

    /**
     * Returns a string that is repeated the specified number of times.
     */
    repeat(count: int): string;

    /**
     * Replaces text in a string, using a regular expression or search string.
     */
    replace(searchValue: string | RegExp, replaceValue: string): string;

    /**
     * Split a string into substrings using the specified separator.
     */
    split(separator: string | RegExp, limit?: int): string[];

    /**
     * Matches a string with a regular expression.
     */
    match(regexp: RegExp): RegExpMatchArray | null;

    /**
     * Searches for a match in a string, and returns the index.
     */
    search(regexp: RegExp): int;
  }

  interface StringConstructor {
    new (value?: any): String;
    (value?: any): string;
    fromCharCode(...codes: int[]): string;
  }

  const String: StringConstructor;

  /**
   * Number type - extends base with methods
   */
  interface Number {
    toString(radix?: number): string;
    toFixed(fractionDigits?: number): string;
    toExponential(fractionDigits?: number): string;
    toPrecision(precision?: number): string;
  }

  interface NumberConstructor {
    new (value?: any): Number;
    (value?: any): number;
    readonly MAX_VALUE: number;
    readonly MIN_VALUE: number;
    readonly NaN: number;
    readonly NEGATIVE_INFINITY: number;
    readonly POSITIVE_INFINITY: number;
    isFinite(value: unknown): value is number;
    isInteger(value: unknown): value is number;
    isNaN(value: unknown): value is number;
    isSafeInteger(value: unknown): value is number;
    parseFloat(string: string): number;
    parseInt(string: string, radix?: number): number;
  }

  const Number: NumberConstructor;

  /**
   * Boolean type
   */
  interface BooleanConstructor {
    new (value?: any): Boolean;
    (value?: any): boolean;
  }

  const Boolean: BooleanConstructor;

  /**
   * Object type - extends base with methods
   */
  interface Object {
    toString(): string;
    hasOwnProperty(v: PropertyKey): boolean;
  }

  interface ObjectConstructor {
    new (value?: any): Object;
    (): any;
    (value: any): any;
    keys(o: object): string[];
    values<T>(o: { [s: string]: T }): T[];
    entries<T>(o: { [s: string]: T }): [string, T][];
    assign<T, U>(target: T, source: U): T & U;
  }

  const Object: ObjectConstructor;

  /**
   * Function type - extends base with methods
   */
  interface Function {
    readonly length: int;
    call(thisArg: any, ...argArray: any[]): any;
    apply(thisArg: any, argArray?: any): any;
    bind(thisArg: any, ...argArray: any[]): any;
  }

  interface FunctionConstructor {
    new (...args: string[]): Function;
    (...args: string[]): Function;
  }

  const Function: FunctionConstructor;

  /**
   * RegExp type - extends base with full API
   */
  interface RegExp {
    exec(string: string): RegExpExecArray | null;
    test(string: string): boolean;
    readonly source: string;
    readonly global: boolean;
    readonly ignoreCase: boolean;
    readonly multiline: boolean;
    lastIndex: int;
  }

  interface RegExpConstructor {
    new (pattern: string | RegExp, flags?: string): RegExp;
    (pattern: string | RegExp, flags?: string): RegExp;
  }

  const RegExp: RegExpConstructor;

  interface RegExpExecArray extends Array<string> {
    index: int;
    input: string;
  }

  interface RegExpMatchArray extends Array<string> {
    index?: int;
    input?: string;
  }

  /**
   * Math object
   */
  interface Math {
    readonly E: number;
    readonly LN10: number;
    readonly LN2: number;
    readonly LOG2E: number;
    readonly LOG10E: number;
    readonly PI: number;
    readonly SQRT1_2: number;
    readonly SQRT2: number;
    abs(x: number): number;
    acos(x: number): number;
    asin(x: number): number;
    atan(x: number): number;
    atan2(y: number, x: number): number;
    ceil(x: number): number;
    cos(x: number): number;
    exp(x: number): number;
    floor(x: number): number;
    log(x: number): number;
    max(...values: number[]): number;
    min(...values: number[]): number;
    pow(x: number, y: number): number;
    random(): number;
    round(x: number): number;
    sin(x: number): number;
    sqrt(x: number): number;
    tan(x: number): number;
  }

  const Math: Math;

  /**
   * JSON object
   */
  interface JSON {
    parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
    stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
  }

  const JSON: JSON;

  /**
   * Console object
   */
  interface Console {
    log(...data: any[]): void;
    error(...data: any[]): void;
    warn(...data: any[]): void;
    info(...data: any[]): void;
    debug(...data: any[]): void;
  }

  const console: Console;

  /**
   * Error types
   */
  interface Error {
    name: string;
    message: string;
    stack?: string;
  }

  interface ErrorConstructor {
    new (message?: string): Error;
    (message?: string): Error;
  }

  const Error: ErrorConstructor;

  /**
   * Map - key-value collection
   */
  interface Map<K, V> {
    readonly size: int;
    get(key: K): V | undefined;
    set(key: K, value: V): this;
    has(key: K): boolean;
    delete(key: K): boolean;
    clear(): void;
    keys(): IterableIterator<K>;
    values(): IterableIterator<V>;
    entries(): IterableIterator<[K, V]>;
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void): void;
    [Symbol.iterator](): IterableIterator<[K, V]>;
  }

  interface MapConstructor {
    new <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;
  }

  const Map: MapConstructor;

  /**
   * Set - unique value collection
   */
  interface Set<T> {
    readonly size: int;
    add(value: T): this;
    has(value: T): boolean;
    delete(value: T): boolean;
    clear(): void;
    keys(): IterableIterator<T>;
    values(): IterableIterator<T>;
    entries(): IterableIterator<[T, T]>;
    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void): void;
    [Symbol.iterator](): IterableIterator<T>;
  }

  interface SetConstructor {
    new <T>(values?: readonly T[] | null): Set<T>;
  }

  const Set: SetConstructor;

  /**
   * Timer functions
   */
  function setTimeout(callback: (...args: any[]) => void, ms?: number, ...args: any[]): number;
  function clearTimeout(id: number | undefined): void;
  function setInterval(callback: (...args: any[]) => void, ms?: number, ...args: any[]): number;
  function clearInterval(id: number | undefined): void;

  /**
   * Additional types
   */
  interface IArguments {
    [index: number]: any;
    length: int;
    callee: Function;
  }

  interface ArrayLike<T> {
    readonly length: int;
    readonly [n: number]: T;
  }
}

// This export is required to make this file a module
export {};
