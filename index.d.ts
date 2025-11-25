/**
 * @tsonic/js-globals
 *
 * Global type definitions for Tsonic in JS mode.
 *
 * These provide JavaScript built-in types and methods for TypeScript
 * when noLib: true is set, enabling JavaScript semantics in Tsonic code.
 *
 * Key principle: Array<T> HAS JS members like .length and .map
 * This enables JS-style programming while compiling to C# with Tsonic.JSRuntime
 */

declare global {
  /**
   * Primitive types (required by TypeScript compiler)
   * Note: null, void are intrinsic and don't need type aliases
   */
  type string = string;
  type number = number;
  type boolean = boolean;
  type symbol = symbol;
  type bigint = bigint;
  type undefined = undefined;
  type any = any;
  type unknown = unknown;
  type never = never;

  /**
   * Array type with full JavaScript API
   * In JS mode, these compile to Tsonic.JSRuntime extension methods
   */
  interface Array<T> {
    /**
     * Gets or sets the length of the array.
     */
    length: number;

    /**
     * Returns the item located at the specified index.
     */
    [n: number]: T;

    /**
     * Appends new elements to the end of an array, and returns the new length.
     */
    push(...items: T[]): number;

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
    unshift(...items: T[]): number;

    /**
     * Returns a copy of a section of an array.
     */
    slice(start?: number, end?: number): T[];

    /**
     * Removes elements from an array and, if necessary, inserts new elements, returning deleted elements.
     */
    splice(start: number, deleteCount?: number, ...items: T[]): T[];

    /**
     * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
     */
    indexOf(searchElement: T, fromIndex?: number): number;

    /**
     * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
     */
    lastIndexOf(searchElement: T, fromIndex?: number): number;

    /**
     * Determines whether all the members of an array satisfy the specified test.
     */
    every(predicate: (value: T, index: number, array: T[]) => unknown): boolean;

    /**
     * Determines whether the specified callback function returns true for any element of an array.
     */
    some(predicate: (value: T, index: number, array: T[]) => unknown): boolean;

    /**
     * Performs the specified action for each element in an array.
     */
    forEach(callbackfn: (value: T, index: number, array: T[]) => void): void;

    /**
     * Calls a defined callback function on each element of an array, and returns an array of the results.
     */
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U): U[];

    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     */
    filter(predicate: (value: T, index: number, array: T[]) => unknown): T[];

    /**
     * Calls the specified callback function for all the elements in an array. The return value is the accumulated result.
     */
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
     */
    find(predicate: (value: T, index: number, array: T[]) => unknown): T | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
     */
    findIndex(predicate: (value: T, index: number, array: T[]) => unknown): number;

    /**
     * Determines whether an array includes a certain element.
     */
    includes(searchElement: T, fromIndex?: number): boolean;

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
    at(index: number): T | undefined;

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
     */
    flat<D extends number = 1>(depth?: D): any[];

    /**
     * Calls a defined callback function on each element of an array, and then flattens the result by one level.
     */
    flatMap<U>(callback: (value: T, index: number, array: T[]) => U | U[]): U[];
  }

  interface ReadonlyArray<T> {
    readonly length: number;
    readonly [n: number]: T;
    slice(start?: number, end?: number): T[];
    indexOf(searchElement: T, fromIndex?: number): number;
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    every(predicate: (value: T, index: number, array: readonly T[]) => unknown): boolean;
    some(predicate: (value: T, index: number, array: readonly T[]) => unknown): boolean;
    forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void): void;
    map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U): U[];
    filter(predicate: (value: T, index: number, array: readonly T[]) => unknown): T[];
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;
    find(predicate: (value: T, index: number, array: readonly T[]) => unknown): T | undefined;
    findIndex(predicate: (value: T, index: number, array: readonly T[]) => unknown): number;
    includes(searchElement: T, fromIndex?: number): boolean;
    concat(...items: (T | readonly T[])[]): T[];
    join(separator?: string): string;
    at(index: number): T | undefined;
  }

  interface ArrayConstructor {
    new <T>(...items: T[]): T[];
    isArray(arg: any): arg is any[];
    from<T>(arrayLike: ArrayLike<T>): T[];
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U): U[];
    of<T>(...items: T[]): T[];
  }

  const Array: ArrayConstructor;

  /**
   * String type with full JavaScript API
   */
  interface String {
    /**
     * Returns the length of a String object.
     */
    readonly length: number;

    /**
     * Returns the character at the specified index.
     */
    charAt(pos: number): string;

    /**
     * Returns the Unicode value of the character at the specified location.
     */
    charCodeAt(index: number): number;

    /**
     * Returns a string that contains the concatenation of two or more strings.
     */
    concat(...strings: string[]): string;

    /**
     * Returns the position of the first occurrence of a substring.
     */
    indexOf(searchString: string, position?: number): number;

    /**
     * Returns the last occurrence of a substring in the string.
     */
    lastIndexOf(searchString: string, position?: number): number;

    /**
     * Determines whether a string contains another string.
     */
    includes(searchString: string, position?: number): boolean;

    /**
     * Determines whether a string begins with the characters of a specified string.
     */
    startsWith(searchString: string, position?: number): boolean;

    /**
     * Determines whether a string ends with the characters of a specified string.
     */
    endsWith(searchString: string, endPosition?: number): boolean;

    /**
     * Returns a copy of this string starting at the specified index.
     */
    slice(start?: number, end?: number): string;

    /**
     * Returns a section of a string.
     */
    substring(start: number, end?: number): string;

    /**
     * Gets a substring beginning at the specified location and having the specified length.
     */
    substr(from: number, length?: number): string;

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
    padStart(targetLength: number, padString?: string): string;

    /**
     * Pads the current string with a given string to a given length from the end.
     */
    padEnd(targetLength: number, padString?: string): string;

    /**
     * Returns a string that is repeated the specified number of times.
     */
    repeat(count: number): string;

    /**
     * Replaces text in a string, using a regular expression or search string.
     */
    replace(searchValue: string | RegExp, replaceValue: string): string;

    /**
     * Split a string into substrings using the specified separator.
     */
    split(separator: string | RegExp, limit?: number): string[];

    /**
     * Matches a string with a regular expression.
     */
    match(regexp: RegExp): RegExpMatchArray | null;

    /**
     * Searches for a match in a string, and returns the index.
     */
    search(regexp: RegExp): number;
  }

  interface StringConstructor {
    new (value?: any): String;
    (value?: any): string;
    fromCharCode(...codes: number[]): string;
  }

  const String: StringConstructor;

  /**
   * Number type
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
  interface Boolean {}

  interface BooleanConstructor {
    new (value?: any): Boolean;
    (value?: any): boolean;
  }

  const Boolean: BooleanConstructor;

  /**
   * Object type
   */
  interface Object {
    constructor: Function;
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
   * Function type
   */
  interface Function {
    prototype: any;
    readonly length: number;
    call(thisArg: any, ...argArray: any[]): any;
    apply(thisArg: any, argArray?: any): any;
    bind(thisArg: any, ...argArray: any[]): any;
  }

  interface CallableFunction extends Function {}
  interface NewableFunction extends Function {}

  interface FunctionConstructor {
    new (...args: string[]): Function;
    (...args: string[]): Function;
  }

  const Function: FunctionConstructor;

  /**
   * RegExp type
   */
  interface RegExp {
    exec(string: string): RegExpExecArray | null;
    test(string: string): boolean;
    readonly source: string;
    readonly global: boolean;
    readonly ignoreCase: boolean;
    readonly multiline: boolean;
    lastIndex: number;
  }

  interface RegExpConstructor {
    new (pattern: string | RegExp, flags?: string): RegExp;
    (pattern: string | RegExp, flags?: string): RegExp;
  }

  const RegExp: RegExpConstructor;

  interface RegExpExecArray extends Array<string> {
    index: number;
    input: string;
  }

  interface RegExpMatchArray extends Array<string> {
    index?: number;
    input?: string;
  }

  /**
   * Symbol type
   */
  interface SymbolConstructor {
    readonly iterator: symbol;
    readonly asyncIterator: symbol;
    readonly hasInstance: symbol;
    readonly isConcatSpreadable: symbol;
    readonly species: symbol;
    readonly toPrimitive: symbol;
    readonly toStringTag: symbol;
  }

  const Symbol: SymbolConstructor;

  type PropertyKey = string | number | symbol;

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
   * Utility types (built into TypeScript)
   */
  type Partial<T> = { [P in keyof T]?: T[P] };
  type Required<T> = { [P in keyof T]-?: T[P] };
  type Readonly<T> = { readonly [P in keyof T]: T[P] };
  type Pick<T, K extends keyof T> = { [P in K]: T[P] };
  type Record<K extends keyof any, T> = { [P in K]: T };
  type Exclude<T, U> = T extends U ? never : T;
  type Extract<T, U> = T extends U ? T : never;
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  type NonNullable<T> = T extends null | undefined ? never : T;
  type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
  type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
  type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
  type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

  /**
   * Promise type
   */
  interface Promise<T> {
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): Promise<TResult1 | TResult2>;
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): Promise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  interface PromiseLike<T> {
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): PromiseLike<TResult1 | TResult2>;
  }

  interface PromiseConstructor {
    new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
    resolve(): Promise<void>;
    resolve<T>(value: T | PromiseLike<T>): Promise<T>;
    reject<T = never>(reason?: any): Promise<T>;
    all<T>(values: readonly (T | PromiseLike<T>)[]): Promise<T[]>;
    race<T>(values: readonly (T | PromiseLike<T>)[]): Promise<T>;
  }

  const Promise: PromiseConstructor;

  /**
   * Iterator types
   */
  interface Iterator<T> {
    next(): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
  }

  interface IteratorResult<T> {
    done: boolean;
    value: T;
  }

  interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
  }

  interface IterableIterator<T> extends Iterator<T> {
    [Symbol.iterator](): IterableIterator<T>;
  }

  /**
   * Template literal type utilities
   */
  type Uppercase<S extends string> = intrinsic;
  type Lowercase<S extends string> = intrinsic;
  type Capitalize<S extends string> = intrinsic;
  type Uncapitalize<S extends string> = intrinsic;

  /**
   * Additional types
   */
  interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
  }

  interface ArrayLike<T> {
    readonly length: number;
    readonly [n: number]: T;
  }
}

// This export is required to make this file a module
export {};
