import { decodeHill, encodeHill } from "./hill-cipher.js";

/** vstupní klíč jako matice */
const KEY_MATRIX = [
	[ 12, 5 ],
	[ 3, 7 ],
];
/** inverzní matice `KEY_MATRIX`, nezbyl mi čas, vymýšlet implementaci inverze matice :( */
const INV_KEY_MATRIX = [
	[ 5, 15 ],
	[ 9, 16 ],
];

/** vstupní zpráva */
const MESSAGE = "unbelievable";

/** spuštění skriptu */
console.log(`[uloha-11]: start`);
const encoded = encodeHill(MESSAGE, KEY_MATRIX);
console.log(`[uloha-11]: encodeHill("${ MESSAGE }", ${ KEY_MATRIX }) = ${ encoded }`);
const decoded = decodeHill(encoded, INV_KEY_MATRIX);
console.log(`[uloha-11]: decodeHill("${ encoded }", ${ INV_KEY_MATRIX }) = ${ decoded }`);
console.log(`[uloha-11]: stop`);
