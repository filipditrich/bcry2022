/**
 * Vrátí pole možných prvočísel v rozmezí min – max.
 * @see https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * @param min
 * @param max
 * @returns {(((predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any) => boolean) | (() => number[]) | ((target: number, start: number, end?: number) => ObjectConstructor) | {<S extends number>(predicate: (value: number, index: number, array: number[]) => value is S, thisArg?: any): this is S[], (predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): boolean} | {(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number, (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number, <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: number[]) => U, initialValue: U): U} | number | (() => IterableIterator<number>) | ((...items: number[]) => number) | ((predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any) => number) | (() => string) | ((callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any) => void) | {<S extends number>(predicate: (value: number, index: number, array: number[]) => value is S, thisArg?: any): S[], (predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[]} | (() => {copyWithin: boolean, entries: boolean, fill: boolean, find: boolean, findIndex: boolean, keys: boolean, values: boolean}) | ((separator?: string) => string) | {(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number, (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number, <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: number[]) => U, initialValue: U): U} | (() => (number | undefined)) | {(...items: ConcatArray<number>): number[], (...items: ConcatArray<number> | number[]): number[]} | (<U>(callbackfn: (value: number, index: number, array: number[]) => U, thisArg?: any) => U[]) | ((value: number, start?: number, end?: number) => ObjectConstructor) | ((start?: number, end?: number) => number[]) | ((searchElement: number, fromIndex?: number) => number) | ((compareFn?: (a: number, b: number) => number) => ObjectConstructor) | (() => IterableIterator<[number, number]>) | {<S extends number>(predicate: (this:void, value: number, index: number, obj: number[]) => value is S, thisArg?: any): (S | undefined), (predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any): (number | undefined)} | {(start: number, deleteCount?: number): number[], (start: number, deleteCount: number, ...items: number[]): number[]})[]}
 */
export const getPrimes = (min, max) => {
	const result = Array(max + 1)
		  .fill(0)
		  .map((_, i) => i);
	for (let i = 2; i <= Math.sqrt(max + 1); i++) {
		for (let j = i ** 2; j < max + 1; j += i) delete result[j];
	}
	return Object.values(result.slice(Math.max(min, 2)));
};

/**
 * Vrátí náhodné prvočíslo v rozmezí min – max.
 * @param min
 * @param max
 * @returns {*}
 */
export const getRandPrime = (min, max) => {
	const primes = getPrimes(min, max);
	return primes[getRandNum(0, primes.length - 1)];
};


/**
 * Vrátí náhodné číslo v rozmezí min – max
 * @param min
 * @param max
 * @returns {number}
 */
export const getRandNum = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Umocní číslo na exponent a vymodulí
 * @param base
 * @param exp
 * @param mod
 * @returns {number}
 */
export function expMod(base, exp, mod) {
	if (exp === 0) return 1;
	if (exp % 2 === 0) {
		return Math.pow(expMod(base, (exp / 2), mod), 2) % mod;
	} else {
		return (base * expMod(base, (exp - 1), mod)) % mod;
	}
}
