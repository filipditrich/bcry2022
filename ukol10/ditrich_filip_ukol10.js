import { cipherMessage, decipherMessage, rsaKeygen } from "./ditrich_filip_ukol10.source.js";

/** vstupní zpráva */
const MESSAGE = "ahoj";

/** spuštění skriptu */
console.log(`[ukol-10]: start`);
const config = rsaKeygen(419, 541);
console.log(`[ukol-10]: rsaKeygen output: ${ JSON.stringify(config) }`);
const encoded = cipherMessage(MESSAGE, config.publicKey.e, config.publicKey.n);
console.log(`[ukol-10]: cipherMessage("${ MESSAGE }", ${ config.publicKey.e }, ${ config.publicKey.n }) = ${ encoded }`);
const decoded = decipherMessage(encoded, config.privateKey.d, config.privateKey.n);
console.log(`[ukol-10]: decipherMessage("${ encoded }", ${ config.privateKey.d }, ${ config.privateKey.n }) = ${ decoded }`);
console.log(`[ukol-10]: stop`);
