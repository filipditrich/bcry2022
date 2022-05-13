/**
 * Vrátí matici, která je výsledkem šifrování textu s klíčem.
 * @param message
 * @param keyMatrix
 * @returns {number[][]}
 */
function getKeyMatrix(message, keyMatrix) {
	const dimensions = keyMatrix.length;
	const charNums = message.toUpperCase().split("").map((char) => char.charCodeAt(0) % 65);
	/** zaokrouhlíme nahoru, abychom mohli chybějící prvky vyplnit paddingovou funkcí níže */
	const nOfMatrix = Math.ceil(charNums.length / dimensions);
	const encodedMatrix = Array(nOfMatrix).fill(0).map(() => Array(dimensions).fill(0));
	
	for (let i = 0; i < nOfMatrix; i++) {
		for (let j = 0; j < dimensions; j++) {
			/** vloží do matice číslice reprezentující pořadí písmene v abecedě,
			 * případně vyplní prázdné prvky hodnotou pro písmeno "A" */
			encodedMatrix[i][j] = charNums[i * dimensions + j] || 0;
		}
	}
	
	return encodedMatrix;
}

/**
 * Vynásobí dvě matice.
 * @param m1
 * @param m2
 * @param mod
 * @returns {*[]}
 */
function multiplyMatrices(m1, m2, mod) {
	const result = [];
	for (let i = 0; i < m1.length; i++) {
		result[i] = [];
		for (let j = 0; j < m2[0].length; j++) {
			let sum = 0;
			for (let k = 0; k < m1[0].length; k++) {
				sum += m1[i][k] * m2[k][j];
			}
			
			/** pokud je definováno, vymodulíme výsledek před jeho uložením do výsledné matice */
			if (mod) sum %= mod;
			result[i][j] = sum;
		}
	}
	return result;
}

/**
 * Jednoduchá implementace Hillovi šifry. Funguje jen pro matice o rozměrech 2x2.
 * @param message
 * @param keyMatrix
 * @returns {string}
 */
const encodeHill = (message, keyMatrix) => {
	const encodedMatrix = getKeyMatrix(message, keyMatrix);
	let cipher = "";
	
	for (let i = 0; i < encodedMatrix.length; i++) {
		const res = multiplyMatrices([ encodedMatrix[i] ], keyMatrix, 26);
		cipher += res[0].map((char) => String.fromCharCode(char + 65)).join("");
	}
	
	return cipher;
};

/**
 * Jednoduchá implementace dešifrování Hillovi šifry. Funguje opět jen pro matice o rozměrech 2x2.
 * @param encodedMessage
 * @param keyMatrix
 * @returns {string}
 */
const decodeHill = (encodedMessage, keyMatrix) => {
	/** implementace v podstatě stejná, pouze bych zde vypočítal inverzní matici */
	return encodeHill(encodedMessage, keyMatrix);
};

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
console.log(`[hill-cipher.js]: start`);
const encoded = encodeHill(MESSAGE, KEY_MATRIX);
console.log(`[hill-cipher.js]: encodeHill("${MESSAGE}", ${KEY_MATRIX}) = ${encoded}`);
const decoded = decodeHill(encoded, INV_KEY_MATRIX);
console.log(`[hill-cipher.js]: decodeHill("${encoded}", ${INV_KEY_MATRIX}) = ${decoded}`);
console.log(`[hill-cipher.js]: stop`);
