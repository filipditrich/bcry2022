import { extgcd } from "../uloha-06/gcd.js";
import { expMod, getPrimes, getRandPrime } from "./utils.js";

/**
 * Funkce, která vygeneruje privátní a veřejný klíč pro jednoduchou RSA šifru.
 * @param inputP - vstupní paramter p
 * @param inputQ - vstupní parametr q
 * @returns {{privateKey: {d: (number|*), n: number}, data: {p: *, q: *, r: number, n: number}, publicKey: {e, n: number}}}
 */
export const rsaKeygen = (inputP, inputQ) => {
	try {
		/** zvolíme dvě (velká) prvočísla (mělo by být ≥ 2^512, ale nechci usmažit mašinu :)) */
		const p = inputP || getRandPrime(1, 512);
		const q = inputQ || getRandPrime(1, 512);
		
		/** vypočítáme jejich produkt `n = p * q` */
		const n = p * q;
		
		/** vypočítáme Eulerovu funkci */
		const r = (p - 1) * (q - 1);
		
		/** najdeme veřejný a vypočteme k němu soukromý klíč */
		const possiblePrimes = getPrimes(1, r);
		let e;
		let d;
		
		for (let i = 0; i < possiblePrimes.length - 1; i++) {
			const prime = possiblePrimes[possiblePrimes.length - 1 - i];
			
			const gcd = extgcd(prime, r);
			/** ověříme podmínku nesoudělnosti */
			if (gcd.gcd === 1 && (gcd.x * p) % r === 1) {
				e = prime;
				d = gcd.x;
				break;
			}
		}
		
		return {
			publicKey: {
				e,
				n,
			},
			privateKey: {
				d,
				n,
			},
			debug: {
				p, q, n, r
			},
		};
	} catch (e) {
		throw new Error(`[rsa.js] Nepodařilo se najít kombinaci veřejného klíče a privátního klíče s q=${ q } a p=${ p }.`);
	}
}

/**
 * Funkce, která zašifruje zadané číslo pomocí RSA šifry.
 * @param inp_code - číslo, které chceme zašifrovat
 * @param e - veřejný klíč
 * @param n - veřejný klíč
 * @returns {number}
 */
export const cipherInt = (inp_code, e, n) => {
	if (inp_code >= n) throw new Error(`[rsa.js]: input message cannot be larger than the value of n="${ n }"`);
	return expMod(inp_code, e, n);
};

/**
 * Funkce, které dešifruje zašifrované číslo pomocí RSA šifry.
 * @param enc_code - zašifrované číslo
 * @param d - privátní klíč
 * @param n - privátní klíč
 * @returns {number}
 */
export const decipherInt = (enc_code, d, n) => {
	return expMod(enc_code, d, n);
};

/**
 * Funkce, která zašifruje vstupní textový řetězec pomocí RSA šifry.
 * @param inp_msg - vstupní zpráva
 * @param e - veřejný klíč
 * @param n - veřejný klíč
 * @returns {number[]}
 */
export const cipherMessage = (inp_msg, e, n) => {
	inp_msg = inp_msg.split("").map(x => cipherInt(x.charCodeAt(0), e, n));
	return inp_msg;
};

/**
 * Funkce, která dešifruje vstupní zašifrované pole pomocí RSA šifry.
 * @param enc_arr - pole zašifrovaných čísel
 * @param d - privátní klíč
 * @param n - privátní klíč
 * @returns {*}
 */
export const decipherMessage = (enc_arr, d, n) => {
	return enc_arr.map(x => String.fromCharCode(decipherInt(x, d, n))).join("");
};
